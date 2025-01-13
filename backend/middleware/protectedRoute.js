import jwt from "jsonwebtoken";

export const protectedRoute = (req, res, next) => {
  const token = req.cookies.token;
 
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // if token is correct then it will return userId
    if (!decoded)
      return res.status(401).json({
        success: false,
        message: "Unauthorized - invalid token provided",
      });
   
    req.userId = decoded.userId; //here we're creating a new property in req object and storing userId in it 
    next();
  } catch (error) {
    console.log("error in protectedRoute ", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
