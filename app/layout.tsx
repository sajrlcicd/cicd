import {Metadata} from "next";
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export const metadata: Metadata = {
    title: {
        template: '%s | Acme Dashboard',
        default: 'Acme Dashboard',
    },
    description: 'Acme is a fictional company used for demonstration purposes only.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
