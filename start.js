const { exec } = require('child_process');

const command = `
        mkdir -p ~/.postgresql && \
        wget "https://storage.yandexcloud.net/cloud-certs/CA.pem" \
            --output-document ~/.postgresql/root.crt && \
        chmod 0600 ~/.postgresql/root.crt
    `;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
