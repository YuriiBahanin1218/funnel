import { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import RootLayout from '@/app/layout';

function App({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}

export default App;
