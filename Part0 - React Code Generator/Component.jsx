const UserRegistrationForm = (props) => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <KdFormLoader errorMode="onSubmit" loading={loading}>
            <form onSubmit={handleSubmit}>
                <KdpaInput label="Username" placeholder="Enter your username" variant="outlined" size="medium" type="text" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
                <KdpaInput label="Email" placeholder="Enter your email" variant="outlined" size="medium" type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                <KdpaInput label="Password" placeholder="Enter your password" variant="outlined" size="medium" type="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                <KdpaInput label="Repeat Password" placeholder="Enter your password again" variant="outlined" size="medium" type="password" defaultValue={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                <KdpaPrimaryButton variant="contained" title={props.submitTitle} loading={loading} />
                <KdAlert severity="success" title={props.alertTitle} />
            </form>
        </KdFormLoader>
    );
};