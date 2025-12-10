const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
try {
const { name, email, password } = req.body;
const hashed = await bcrypt.hash(password, 10);


const user = await User.create({ name, email, password: hashed });


res.status(201).json({ message: 'User created', user });
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.login = async (req, res) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ where: { email } });


if (!user) return res.status(404).json({ error: 'User not found' });


const ok = await bcrypt.compare(password, user.password);
if (!ok) return res.status(401).json({ error: 'Invalid password' });


const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });


res.json({ token });
} catch (err) {
res.status(400).json({ error: err.message });
}
};