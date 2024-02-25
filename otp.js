const otpGenerator = require('otp-generator')

function generateotp()
{
    const otp= otpGenerator.generate(6, 
    { upperCaseAlphabets: false,
     specialChars: false });
     return otp;
}
module.exports= generateotp();