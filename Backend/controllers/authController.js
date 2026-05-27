const users=require('../data/users');

//signup

const SignupUser = (req,res)=>{
    const {name , email , password} = req.body;

    const existingUser = users.find(
        (user)=>user.email === email
    );

    if (existingUser) {
        return res.status(400).json({
            message:"User Already exists"
        })
    }

    const newUser = {
        id:Date.now(),
        name,
        email,
        password
    };

    users.push(newUser);

    res.status(201).json({
        message:"New User signUp successfully",
        user:newUser
    });
};


//login

const loginUser =(req,res)=>{
    const {email , password} = req.body;

    const user = users.find(
        (user)=>user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message:"Invalid Credentials"
        });
    }

    return res.status(201).json({
        message:"Login Successful",
        user
    })
}

module.exports={
    SignupUser,
    loginUser
};