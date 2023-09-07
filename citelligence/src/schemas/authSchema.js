import * as Yup from 'yup';

export const authEmailSchema = Yup.object({
    authEmailInpt: Yup.string()
    .email("The provided email isn't valid!")
    .required("Please Enter Your Email!")
})

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const authMobileSchema = Yup.object({
    authMobileInpt: Yup.string().required('Mobile number is required')
    .matches(phoneRegExp, 'Phone number is not valid').max(10, "Phone Number is not valid")
})

export const authOtpSchema = Yup.object({
    authOtpInpt: Yup.string().required("Please enter the OTP that has been sent to your email.")
})

export const authPwdSchema = Yup.object({
    authPwdInpt: Yup.string()
    .required("Please enter your password to proceed.")
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
})

export const authAccPrfSchema = Yup.object({
    fnameInpt: Yup.string().required("Please, Enter your First Name"),
    lnameInpt: Yup.string().required("Please, Enter your Last Name"),
    dobInpt: Yup.date().required("Date of Birth Field is required!").max(new Date(), "Date of birth cannot be in the future!"),
    zSelInpt: Yup.string().required("Select the Gender!")
})