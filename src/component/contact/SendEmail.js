import emailjs from 'emailjs-com';

export function handleSend(e) {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
        .then(
            (result) => {
                console.log('SUCCESS!', result.text);
                alert("✅ Message sent!");
                e.target.reset(); // optional: reset form
            },
            (error) => {
                console.error('FAILED...', error.text);
                alert("❌ Failed to send message.");
            }
        );
}
