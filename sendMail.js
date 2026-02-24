const fs = require('fs');
const path = require('path');
const archiver = require('archiver');   // ← only declare once
const nodemailer = require('nodemailer');

(async () => {
    try {
        // Paths
        const reportFolder = path.join(__dirname, 'allure-report');
        const zipPath = path.join(__dirname, 'allure-report.zip');

        // Remove old zip if exists
        if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

        // Step 1: Zip the Allure report
        const output = fs.createWriteStream(zipPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        archive.pipe(output);
        archive.directory(reportFolder, false);

        await archive.finalize(); // ✅ await inside async function
        console.log('✅ Allure report zipped successfully!');

        // Step 2: Send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'abishek.t@kazam.in',   // sender email
                pass: 'adjkaoiatuakphds'      // app password
            }
        });

        const mailOptions = {
            from: 'abishek.t@kazam.in',
            to: 'abishek.t@kazam.in',       // recipient email
            subject: 'Allure Automation Report',
            text: 'Please find attached the complete Allure report.',
            attachments: [
                { filename: 'allure-report.zip', path: zipPath }
            ]
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
    } catch (err) {
        console.error('❌ Error in sendMail.js:', err);
    }
})();





// for pdf report

// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');
// const archiver = require('archiver');
// const { exec } = require('child_process');

// // Paths
// const reportFolder = path.join(__dirname, 'allure-report');
// const pdfPath = path.join(__dirname, 'Allure-Test-Report.pdf');
// const zipPath = path.join(__dirname, 'allure-report.zip');

// // Step 0: Remove old PDF and zip if they exist
// if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
// if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

// (async () => {
//     let server;
//     try {

//         // ✅ Step 1: Start local HTTP server
//         server = exec('npx http-server allure-report -p 8080');

//         console.log('🚀 Local server started...');

//         // Wait 3 seconds for server to start
//         await new Promise(resolve => setTimeout(resolve, 3000));

//         // ✅ Step 2: Convert Allure report to PDF
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();

//         await page.goto('http://localhost:8080', {
//             waitUntil: 'networkidle0'
//         });

//         // Wait until Allure content loads fully
//         await page.waitForSelector('.app__content', { timeout: 0 });

//         // Extra delay for charts rendering
//         await new Promise(resolve => setTimeout(resolve, 5000));

//         await page.pdf({
//             path: pdfPath,
//             format: 'A4',
//             printBackground: true
//         });

//         await browser.close();
//         console.log('✅ PDF created successfully!');

//         // ✅ Step 3: Zip full Allure report
//         const output = fs.createWriteStream(zipPath);
//         const archive = archiver('zip', { zlib: { level: 9 } });

//         archive.pipe(output);
//         archive.directory(reportFolder, false);
//         await archive.finalize();

//         await new Promise(resolve => output.on('close', resolve));

//         console.log('✅ Allure report zipped successfully!');

//         // ✅ Step 4: Send Email
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'abishek.t@kazam.in',
//                 pass: 'nqiqfmacjsqpoeye'
//             }
//         });
// const today = new Date();
// const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
//         const mailOptions = {
//             from: 'abishek.t@kazam.in',
//             to: 'abishek.t@kazam.in',
//             subject: 'Latest Automation Report',
//             text: `Hi Team,

// Please find attached the latest Automation Test Execution Report.

// Execution Details:
// - Project: The Sustainer Automation
// - Environment: QA
// - Execution Date: ${formattedDate}

// The report includes test summary, pass/fail statistics, and detailed failure information.

// Please review and let me know if any clarification is needed.

// Regards,
// Abishek`,
//             attachments: [
//                 {
//                     filename: 'Allure-Test-Report.pdf',
//                     path: pdfPath
//                 }
//             ]
//         };

//         await transporter.sendMail(mailOptions);

//         console.log('✅ Email sent successfully!');

//         // ✅ Stop server
//         if (server) server.kill();

//     } catch (err) {
//         console.error('❌ Error in sendMail.js:', err);
//         if (server) server.kill();
//     }
// })();






// Don't use this


// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');
// const archiver = require('archiver');

// // Paths
// const reportFolder = path.join(__dirname, 'allure-report');
// const indexPath = path.join(reportFolder, 'index.html');
// const pdfPath = path.join(__dirname, 'Allure-Test-Report.pdf');
// const zipPath = path.join(__dirname, 'allure-report.zip');

// // Step 0: Remove old PDF and zip if they exist
// if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
// if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

// (async () => {
//     try {
//         // Step 1: Convert Allure HTML report to PDF
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();
//         await page.goto(`file://${indexPath}`, { waitUntil: 'networkidle0' });

//         // Wait a few seconds for all JS to load (replace waitForTimeout)
//         await new Promise(resolve => setTimeout(resolve, 120000));

//         await page.pdf({
//             path: pdfPath,
//             format: 'A4',
//             printBackground: true
//         });
//         await browser.close();
//         console.log('✅ PDF created successfully!');

//         // Optional: Step 1b — Zip the full Allure report folder
//         const output = fs.createWriteStream(zipPath);
//         const archive = archiver('zip', { zlib: { level: 9 } });
//         archive.pipe(output);
//         archive.directory(reportFolder, false);
//         await archive.finalize();
//         console.log('✅ Allure report zipped successfully!');

//         // Step 2: Send email with PDF attachment
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'abishek.t@kazam.in',  // sender email
//                 pass: 'nqiqfmacjsqpoeye'      // Gmail app password
//             }
//         });

//         const mailOptions = {
//             from: 'abishek.t@kazam.in',
//             to: 'abishek.t@kazam.in',
//             subject: 'Latest Automation Report',
//             text: 'Please find the attached latest Allure report (PDF).',
//             attachments: [
//                 {
//                     filename: 'Allure-Test-Report.pdf',
//                     path: pdfPath
//                 }
//             ]
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log('❌ Error sending email:', error);
//             } else {
//                 console.log('✅ Email sent successfully: ' + info.response);
//             }
//         });

//     } catch (err) {
//         console.error('❌ Error in sendMail.js:', err);
//     }
// })();





// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');
// const archiver = require('archiver');

// // Paths
// const reportFolder = path.join(__dirname, 'allure-report');
// const indexPath = path.join(reportFolder, 'index.html');
// const pdfPath = path.join(__dirname, 'Allure-Test-Report.pdf');
// const zipPath = path.join(__dirname, 'Allure-Report.zip');

// (async () => {
//     try {
//         // Step 1: Convert Allure HTML report to PDF
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();
//         await page.goto(`file://${indexPath}`, { waitUntil: 'networkidle0' });
//         await new Promise(resolve => setTimeout(resolve, 60000)); // wait 5 seconds


//         await page.pdf({
//             path: pdfPath,
//             format: 'A4',
//             printBackground: true
//         });
//         await browser.close();
//         console.log('✅ PDF created successfully!');

//         // Step 2: Zip the PDF
//         if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath); // delete old zip if exists

//         const output = fs.createWriteStream(zipPath);
//         const archive = archiver('zip', { zlib: { level: 9 } });

//         output.on('close', () => {
//             console.log(`✅ PDF zipped successfully: ${archive.pointer()} total bytes`);
//         });

//         archive.on('error', (err) => { throw err; });

//         archive.pipe(output);
//         archive.file(pdfPath, { name: 'Allure-Test-Report.pdf' });
//         await archive.finalize();

//         // Wait until zip is fully created
//         await new Promise(resolve => output.on('close', resolve));

//         // Step 3: Send email with ZIP attachment
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'abishek.t@kazam.in',   // sender email
//                 pass: 'nqiqfmacjsqpoeye'      // app password
//             }
//         });

//         const mailOptions = {
//             from: 'abishek.t@kazam.in',
//             to: 'abishek.t@kazam.in',      // receiver email
//             subject: 'Latest Automation Report',
//             text: 'Please find the attached latest Allure report in ZIP format.',
//             attachments: [
//                 {
//                     filename: 'Allure-Report.zip',
//                     path: zipPath
//                 }
//             ]
//         };

//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log('❌ Error sending email:', error);
//             } else {
//                 console.log('✅ Email sent: ' + info.response);
//             }
//         });

//     } catch (err) {
//         console.error('❌ Error in sendMail.js:', err);
//     }
// })();






// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// // Paths
// const reportFolder = path.join(__dirname, 'allure-report');
// const indexPath = path.join(reportFolder, 'index.html');
// const pdfPath = path.join(__dirname, 'Allure-Test-Report.pdf');

// (async () => {
//     // Step 1: Convert Allure HTML report to PDF
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(`file://${indexPath}`, { waitUntil: 'networkidle0' });
// await page.waitForTimeout(10000); // waits 10 seconds

//     await page.pdf({
//         path: pdfPath,
//         format: 'A4',
//         printBackground: true
//     });
//     await browser.close();
//     console.log('PDF created successfully!');

//     // Step 2: Send email with PDF attachment
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'abishek.t@kazam.in',   // sender email
//             pass: 'nqiqfmacjsqpoeye'  // app password
//         }
//     });

//     let mailOptions = {
//         from: 'abishek.t@kazam.in',
//         to: 'abishek.t@kazam.in',
//         subject: 'Latest Automation Report',
//         text: 'Please find the attached latest Allure report in PDF format.',
//         attachments: [
//             {
//                 filename: 'Allure-Test-Report.pdf',
//                 path: pdfPath
//             }
//         ]
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log('Error sending email:', error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// })();









// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const path = require('path');
// const archiver = require('archiver');

// // Path to the Allure report folder
// const reportFolder = path.join(__dirname, 'allure-report');
// const zipPath = path.join(__dirname, 'allure-report.zip');

// // Step 1: Delete previous zip if exists
// if (fs.existsSync(zipPath)) {
//     fs.unlinkSync(zipPath);
// }

// // Step 2: Zip the Allure report
// const output = fs.createWriteStream(zipPath);
// const archive = archiver('zip', { zlib: { level: 9 } });

// output.on('close', function () {
//     console.log(`Report zipped: ${archive.pointer()} total bytes`);

//     // Step 3: Send email with NodeMailer
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'abishek.t@kazam.in',          // sender email
//             pass: 'nqiqfmacjsqpoeye'             // app password
//         }
//     });

//     let mailOptions = {
//         from: 'abishek.t@kazam.in',
//         to: 'abishekt2434@gmail.com',
//         subject: 'Latest Automation Report',
//         text: 'Please find the attached latest Allure report.',
//         attachments: [
//             {
//                 filename: 'allure-report.zip',
//                 path: zipPath
//             }
//         ]
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log('Error sending email:', error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// });

// archive.on('error', function (err) {
//     throw err;
// });

// archive.pipe(output);
// archive.directory(reportFolder, false);
// archive.finalize();
