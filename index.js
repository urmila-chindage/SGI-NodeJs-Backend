// Imported required packages
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

// MongoDB Databse url
//var mongoDatabase = 'mongodb+srv://GhodawatSoftech:GhodawatSoftech@cluster0.zbtirvx.mongodb.net/WebSite_SGI';

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(process.env.MONGO_DB_URL).then(
() => { console.log('Database is connected') },
err => { console.log('There is problem while connecting database ' + err) }
);

app.get('/', (req, res) => res.send('Server is Running!'))
app.listen(4000, () => console.log('Example app listening on port 4000!'))

/* app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/.env" });
}  */

// All the express routes
const employeeRoutes = require('./routes/employeesRoute');
const contactRoutes = require('./routes/contactsRoute');
const modalwindowRoutes = require('./routes/modalWindowRoute');
const carouselRoutes = require('./routes/carouselRoute');
const marqueeRoutes = require('./routes/marqueeRoute');
const subscriberRoutes = require('./routes/subscriberRoute');
const counterRoutes = require('./routes/counterRoute');
const clientsubscriberRoutes = require('./routes/clientsubscriberRoute');
const imagegalleryRoutes = require('./routes/imagegalleryRoute');
const auditreportRoutes = require('./routes/auditreportRoute');
const testimonialsRoutes = require('./routes/testimonialsRoute');
const latestupdateRoutes = require('./routes/latestupdateRoute');
const staffRoutes = require('./routes/staffRoute');
const achievementRoutes = require('./routes/achievementsRoute');
const activityRoutes = require('./routes/activityRoute');
const calendarRoutes = require('./routes/calendarRoute');
const publicationRoutes = require('./routes/publicationRoute');
const implinkRoutes = require('./routes/implinkRoute');
const newsRoutes = require('./routes/newsRoute');
const libraryRoutes = require('./routes/libraryRoute');
const resultnletterRoutes = require('./routes/resultnletterRoute');
const emailRoutes = require('./routes/emailRoute');
const emailuploadRoutes = require('./routes/emailuploadRoute');
const placementRoutes = require('./routes/placementRoute');
const placementofficerRoutes = require('./routes/placementofficerRoute');
const committeeRoutes = require('./routes/committeeRoute');

// Conver incoming data to JSON format
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// Enabled CORS
app.use(cors());

// Setup for the server port number
//const port = process.env.PORT || 4000;

// Routes Configuration
app.use('/employees', employeeRoutes);
app.use('/ContactUS', contactRoutes);
app.use('/ModalWindow', modalwindowRoutes);
app.use('/Caursel', carouselRoutes);
app.use('/Marquee', marqueeRoutes);
app.use('/Subscriber', subscriberRoutes);
app.use('/Counter', counterRoutes);
app.use('/ClientSubscriber', clientsubscriberRoutes);
app.use('/ImageGallery', imagegalleryRoutes);
app.use('/AuditReport', auditreportRoutes);
app.use('/Testimonials', testimonialsRoutes);
app.use('/LatestUpdate', latestupdateRoutes);
app.use('/StaffData', staffRoutes);
app.use('/Achivement', achievementRoutes);
app.use('/Activity', activityRoutes);
app.use('/Calendar', calendarRoutes);
app.use('/Publication', publicationRoutes);
app.use('/ImpLink', implinkRoutes);
app.use('/News', newsRoutes);
app.use('/Library', libraryRoutes);
app.use('/ResultnLetter', resultnletterRoutes);
app.use('/Email', emailRoutes);
app.use('/EmailUpload', emailuploadRoutes);
app.use('/Placement', placementRoutes);
app.use('/PlacementOfficer', placementofficerRoutes);
app.use('/Committee', committeeRoutes);

// Staring our express server
//const server = app.listen(port, function () {
//console.log('Server Lisening On Port : ' + port);
//});