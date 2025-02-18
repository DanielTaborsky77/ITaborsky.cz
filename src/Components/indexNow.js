const sendIndexNowRequest = async () => {
    const payload = {
        host: "https://itaborsky.cz",
        key: "21be6e1b47d54025a332a85d96ee45dd",
        keyLocation: "https://itaborsky.cz/21be6e1b47d54025a332a85d96ee45dd.txt",
        urlList: ["https://itaborsky.cz"],
    };
    try {
        const response = await fetch('https://index-now-4illabtotq-uc.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const result = await response.text();
        if (response.ok) {
            console.log('IndexNow request sent successfully', result);
        } else {
            console.error('Error in sending request', result);
        }
    } catch (error) {
        console.error('Error sending request', error);
    }
};
export default sendIndexNowRequest;