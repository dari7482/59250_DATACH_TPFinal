import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/color'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../service/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
//import { loginSchema } from '../validations/loginSchema'
//import { deleteSession, insertSession } from '../db'


const Login = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [triggerLogin, { data, isSuccess, isError, error }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("data")
        console.log(isSuccess)
        console.log(isError)

        if (isSuccess) console.log(data)
        if (isError) console.log(error)


    }, [isSuccess, isError])
    const onSubmit = async () => {
        console.log(email, password)
        const { data } = await triggerLogin({ email, password })
        console.log(data.email, '35')
        dispatch(setUser({ email: data.email, idToken: data.idToken }))


    }
    /*useEffect(() => {
        if (isError) {
            setErrorEmail("email o contraseña invalida")
            setErrorPassword("email o contraseña invalida")
        }
    }, [isError])*/


    /*const onSubmit = async () => {
        try {
            loginSchema.validateSync({ email, password })
            const { data } = await triggerLogin({ email, password })
            deleteSession()
            insertSession(data)
            dispatch(setUser({
                email: data.email,
                idToken: data.idToken,
                localId: data.localId
            }))
        } catch (error) {
            console.log(error)
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    setErrorPassword("")
                    break
                case "password":
                    setErrorPassword(error.message)
                    setErrorEmail("")
                    break
                default:
                    break
            }

        }
    }*/

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesion" />
                <Text style={styles.sub}>No tenes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Registro</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "90%",
        backgroundColor: colors.green2,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    title: {
        fontSize: 22,
        fontFamily: "Lobster"
    },
    sub: {
        fontSize: 14,
        fontFamily: "Josefin"
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Josefin",
        color: "blue"
    }
})