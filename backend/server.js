const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
 mongoose.connect('mongodb://127.0.0.1:27017/formData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const formSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Phone: String,
  Subject: String,
  Message: String
});

const Form = mongoose.model('form', formSchema);


// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ravaltushar11@gmail.com',
      pass: 'mmjx fpct qzah hotx'
    }
  });
  
  app.post('/api/form', async (req, res) => {
    const formData = new Form(req.body);
    try {
      await formData.save();
  
      // Send email notification
      const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com',
        subject: 'New Enquiry Submitted',
        text: `A new enquiry has been submitted:
        Name: ${formData.Name}
        Phone : ${formData.Phone}
        Email: ${formData.Email}
        Subject: ${formData.Subject}
        Message: ${formData.Message}`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
  
      res.status(200).send('Form data saved successfully');
    } catch (error) {
      res.status(500).send('Error saving form data');
    }
  });
  



app.post('/api/form', async (req, res) => {
  const formData = new Form(req.body);
  try {
    await formData.save();
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving form data');
  }
});

/*const fetchData = async () => {  // To check wether data is entered in database of not
    try {
      const data = await Form.find();
      console.log('Form Data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      mongoose.connection.close();
    }
  };
  
  fetchData();*/

  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
