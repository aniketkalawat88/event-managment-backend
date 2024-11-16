const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Event = require("../models/Event");

const registerPost = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const userCreated = new User({
      name,
      email,
      password,
    });
    await userCreated.save();
    res.status(201).json({ message: "User registered", value: userCreated });
  } catch (error) {
    res.status(400).json({ message: "Error Register ", error: error.message });
  }
};

const loginPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        {
        expiresIn: "30d",
        }
    );
        res.json({ message: "Login Succesfull", value: user, Token: token });
  } catch (error) {
    res.status(400).json({ message: "Error Login", error: error.message });
  }
};

const rsvpPost = async (req, res) => {
  try {
    const event = await Event.findById(req.params._id);
    console.log(req.params._id);

    if (!event) return res.status(404).json({ message: "Event not found" });
    console.log(req.user.id)
    if (event.attendees.includes(req.user.id)) {
      return res.status(400).json({ message: "You Booking is alrady confirm" });
    }

    const data = event.attendees.push(req.user.id);
    await event.save();
    res.status(200).json({ message: "Event Booking successful (RSVP)", value: data });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error Booking ( RSVP Request) ", error: error.message });
  }
};

const roleCheck = async (req ,res) => {
  try {
    const { role } = req.user;
    if (!role) {
        return res.status(404).json({ message: "User not found." });
    }
    return res.status(200).json({role: role });
    
  } catch (error) {
    res.status(400).json({ message: "Error role check", error: error.message });
  }
}

const rsvpList = async (req, res) => {
  try {
      const userId = req.user._id;
      const rsvpEvents = await Event.find({ attendees: userId });

      if (!rsvpEvents.length) {
          return res.status(404).json({ message: "You are not participated any events" });
      }
      res.status(200).json({message:"All Events List", value:rsvpEvents });

  } catch (error) {
      res.status(400).json({ message: "Error User RSVP list", error: error });
  }
}

const userProfile = async (req, res) => {
  try {
      const userId = req.user._id;
      const userData = await User.findById(userId).select("-password"); 
      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({message:"Succesfully get data", value: userData });
  } catch (error) {
    console.log(error)
      res.status(500).json({ message: "Error profile data", error: error });
  }
}

module.exports = { registerPost, loginPost, rsvpPost , roleCheck , rsvpList , userProfile};
