import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - AIS Auto Rescheduler Extension | US Visa Radar',
    description:
        'Privacy Policy for VisaRadar.cc: AIS Auto Rescheduler Extension. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <style jsx global>{`
                .privacy-container {
                    max-width: 900px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 40px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .privacy-container h1 {
                    font-size: 2.5em;
                    color: #1a1a1a;
                    margin-bottom: 10px;
                    border-bottom: 3px solid #4caf50;
                    padding-bottom: 15px;
                }

                .privacy-container .last-updated {
                    color: #666;
                    font-size: 0.9em;
                    margin-bottom: 30px;
                    font-style: italic;
                }

                .privacy-container h2 {
                    font-size: 1.8em;
                    color: #2c3e50;
                    margin-top: 35px;
                    margin-bottom: 15px;
                    padding-left: 10px;
                    border-left: 4px solid #4caf50;
                }

                .privacy-container h3 {
                    font-size: 1.3em;
                    color: #34495e;
                    margin-top: 25px;
                    margin-bottom: 12px;
                }

                .privacy-container p {
                    margin-bottom: 15px;
                    text-align: justify;
                    line-height: 1.6;
                    color: #333;
                }

                .privacy-container ul,
                .privacy-container ol {
                    margin-left: 30px;
                    margin-bottom: 15px;
                }

                .privacy-container li {
                    margin-bottom: 10px;
                    line-height: 1.6;
                }

                .privacy-container strong {
                    color: #2c3e50;
                }

                .highlight-box {
                    background-color: #fff3cd;
                    border-left: 4px solid #ffc107;
                    padding: 15px 20px;
                    margin: 20px 0;
                    border-radius: 4px;
                }

                .info-box {
                    background-color: #e7f3ff;
                    border-left: 4px solid #2196f3;
                    padding: 15px 20px;
                    margin: 20px 0;
                    border-radius: 4px;
                }

                .contact-section {
                    background-color: #f8f9fa;
                    padding: 20px;
                    border-radius: 6px;
                    margin-top: 30px;
                }

                .privacy-container a {
                    color: #4caf50;
                    text-decoration: none;
                }

                .privacy-container a:hover {
                    text-decoration: underline;
                }

                .privacy-footer {
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    text-align: center;
                    color: #666;
                    font-size: 0.9em;
                }

                @media (max-width: 768px) {
                    .privacy-container {
                        padding: 20px;
                    }

                    .privacy-container h1 {
                        font-size: 2em;
                    }

                    .privacy-container h2 {
                        font-size: 1.5em;
                    }
                }
            `}</style>

            <div className="privacy-container">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: January 2025</p>

                <div className="info-box">
                    <p>
                        <strong>
                            VisaRadar.cc: AIS Auto Rescheduler Extension
                        </strong>{' '}
                        is committed to protecting your privacy. This Privacy
                        Policy explains how we collect, use, disclose, and
                        safeguard your information when you use our Chrome
                        browser extension.
                    </p>
                </div>

                <h2>1. Information We Collect</h2>

                <h3>1.1 Personal Information</h3>
                <p>
                    When you use our extension, we collect the following
                    personal information:
                </p>
                <ul>
                    <li>
                        <strong>Email Address:</strong> Used for activation
                        verification and account management
                    </li>
                    <li>
                        <strong>Activation Code/Token:</strong> Used to verify
                        your authorization to use the extension
                    </li>
                </ul>

                <h3>1.2 Stored Configuration Data</h3>
                <p>
                    The following information is stored locally on your device
                    using Chrome's storage API:
                </p>
                <ul>
                    <li>
                        <strong>AIS Website Password:</strong> Encrypted and
                        stored locally for automatic login functionality
                    </li>
                    <li>
                        <strong>Date Preferences:</strong> Your preferred start
                        date, end date, and excluded dates
                    </li>
                    <li>
                        <strong>Location Settings:</strong> Your selected
                        appointment location and country
                    </li>
                    <li>
                        <strong>Check Interval:</strong> Your configured
                        monitoring frequency (30-120 seconds)
                    </li>
                    <li>
                        <strong>Extension Settings:</strong> General preferences
                        and configuration options
                    </li>
                </ul>

                <div className="highlight-box">
                    <p>
                        <strong>Important:</strong> Your AIS website password
                        and personal settings are stored ONLY on your local
                        device. They are encrypted and never transmitted to our
                        servers or any third parties.
                    </p>
                </div>

                <h3>1.3 Automatically Collected Information</h3>
                <p>We do NOT automatically collect:</p>
                <ul>
                    <li>Browsing history or website usage data</li>
                    <li>IP addresses or device identifiers</li>
                    <li>Cookies or tracking information</li>
                    <li>
                        Personal data beyond what is explicitly required for
                        activation
                    </li>
                </ul>

                <h2>2. How We Use Your Information</h2>

                <p>
                    We use the collected information for the following purposes:
                </p>

                <h3>2.1 Service Provision</h3>
                <ul>
                    <li>
                        <strong>Activation Verification:</strong> To verify your
                        right to use the extension through our activation system
                    </li>
                    <li>
                        <strong>Status Validation:</strong> To periodically
                        check (every 60 minutes) that your activation remains
                        valid
                    </li>
                    <li>
                        <strong>Functionality:</strong> To provide automatic
                        appointment monitoring and booking services
                    </li>
                </ul>

                <h3>2.2 Communication</h3>
                <ul>
                    <li>To send activation-related notifications</li>
                    <li>To alert you when your activation has expired</li>
                    <li>
                        To respond to your support requests and inquiries
                    </li>
                </ul>

                <h3>2.3 Service Improvement</h3>
                <ul>
                    <li>
                        To maintain and improve the extension's functionality
                    </li>
                    <li>To troubleshoot technical issues</li>
                </ul>

                <h2>3. Data Sharing and Disclosure</h2>

                <h3>3.1 Third-Party Services</h3>
                <p>We use the following third-party service:</p>
                <ul>
                    <li>
                        <strong>Activation Server:</strong> Hosted at{' '}
                        <code>crx-activation.us-slot.workers.dev</code>{' '}
                        (Cloudflare Workers) for activation verification
                        purposes only
                    </li>
                </ul>

                <h3>3.2 What We DO NOT Share</h3>
                <p>We explicitly DO NOT:</p>
                <ul>
                    <li>Sell your personal information to third parties</li>
                    <li>Share your data with advertising networks</li>
                    <li>Transmit your AIS website password to any server</li>
                    <li>Track your browsing activity across websites</li>
                    <li>
                        Share your appointment preferences or settings with
                        anyone
                    </li>
                </ul>

                <h3>3.3 Legal Requirements</h3>
                <p>
                    We may disclose your information if required to do so by law
                    or in response to valid requests by public authorities
                    (e.g., a court or government agency) to:
                </p>
                <ul>
                    <li>Comply with legal obligations</li>
                    <li>Protect and defend our rights or property</li>
                    <li>Prevent or investigate possible wrongdoing</li>
                    <li>
                        Protect the personal safety of users or the public
                    </li>
                </ul>

                <h2>4. Data Security</h2>

                <p>
                    We implement appropriate security measures to protect your
                    information:
                </p>

                <h3>4.1 Encryption</h3>
                <ul>
                    <li>
                        Your AIS website password is encrypted before being
                        stored locally
                    </li>
                    <li>
                        All communication with our activation server uses HTTPS
                        encryption
                    </li>
                    <li>
                        Activation tokens are securely transmitted using Bearer
                        authentication
                    </li>
                </ul>

                <h3>4.2 Local Storage</h3>
                <ul>
                    <li>
                        Sensitive data is stored using Chrome's secure storage
                        API
                    </li>
                    <li>
                        Data remains on your device and is not synchronized
                        across devices
                    </li>
                </ul>

                <div className="highlight-box">
                    <p>
                        <strong>Security Notice:</strong> While we implement
                        security best practices, no method of transmission over
                        the Internet or electronic storage is 100% secure. We
                        cannot guarantee absolute security of your information.
                    </p>
                </div>

                <h2>5. Data Retention</h2>

                <h3>5.1 Local Data</h3>
                <p>
                    Data stored on your device (passwords, settings,
                    preferences) remains until you:
                </p>
                <ul>
                    <li>Manually clear the extension's data</li>
                    <li>Uninstall the extension</li>
                    <li>Clear your browser's extension data</li>
                </ul>

                <h3>5.2 Server Data</h3>
                <p>
                    Email addresses and activation records stored on our server
                    are retained for:
                </p>
                <ul>
                    <li>As long as your activation is active</li>
                    <li>
                        A reasonable period after expiration for support
                        purposes
                    </li>
                    <li>As required by applicable laws and regulations</li>
                </ul>

                <h2>6. Your Rights and Choices</h2>

                <p>
                    You have the following rights regarding your personal
                    information:
                </p>

                <h3>6.1 Access and Correction</h3>
                <ul>
                    <li>
                        You can view and modify your settings within the
                        extension at any time
                    </li>
                    <li>Contact us to request access to your activation data</li>
                </ul>

                <h3>6.2 Data Deletion</h3>
                <ul>
                    <li>
                        Uninstall the extension to remove all locally stored
                        data
                    </li>
                    <li>
                        Contact us at{' '}
                        <a href="mailto:service@visaradar.cc">
                            service@visaradar.cc
                        </a>{' '}
                        to request deletion of your activation record
                    </li>
                </ul>

                <h3>6.3 Opt-Out</h3>
                <ul>
                    <li>
                        You can stop using the extension at any time by
                        disabling or uninstalling it
                    </li>
                    <li>
                        Turn off the extension when not in use to prevent
                        background operations
                    </li>
                </ul>

                <h2>7. Children's Privacy</h2>

                <p>
                    Our extension is not intended for use by individuals under
                    the age of 18. We do not knowingly collect personal
                    information from children. If you are a parent or guardian
                    and believe your child has provided us with personal
                    information, please contact us immediately.
                </p>

                <h2>8. International Data Transfers</h2>

                <p>
                    Your information may be transferred to and processed in
                    countries other than your country of residence. Our
                    activation server is hosted on Cloudflare Workers, which may
                    process data in multiple jurisdictions. By using our
                    extension, you consent to such transfers.
                </p>

                <h2>9. Changes to This Privacy Policy</h2>

                <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by:
                </p>
                <ul>
                    <li>
                        Updating the "Last Updated" date at the top of this
                        policy
                    </li>
                    <li>Posting the new Privacy Policy on this page</li>
                    <li>
                        Notifying you through the extension or via email for
                        material changes
                    </li>
                </ul>

                <p>
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                </p>

                <h2>10. Third-Party Websites</h2>

                <p>
                    Our extension interacts with the AIS visa appointment
                    website (<code>ais.usvisa-info.com</code>). This Privacy
                    Policy does not apply to third-party websites. We are not
                    responsible for the privacy practices of:
                </p>
                <ul>
                    <li>The AIS visa appointment system</li>
                    <li>
                        Any other websites you may access through your browser
                    </li>
                </ul>

                <p>
                    We encourage you to review the privacy policies of any
                    third-party websites you visit.
                </p>

                <h2>11. Legal Disclaimers</h2>

                <div className="highlight-box">
                    <h3>No Success Guarantee</h3>
                    <ul>
                        <li>
                            This extension does not guarantee successful
                            appointment booking
                        </li>
                        <li>
                            Users must comply with all visa application rules
                            and regulations
                        </li>
                        <li>
                            Misuse of automation tools may violate website terms
                            of service
                        </li>
                    </ul>

                    <h3>Legal Compliance</h3>
                    <ul>
                        <li>
                            This extension is provided "as-is" for convenience
                            purposes only
                        </li>
                        <li>
                            Users are fully responsible for compliance with
                            local laws and website policies
                        </li>
                        <li>
                            We are not liable for any consequences resulting
                            from use of this extension
                        </li>
                        <li>
                            We are not affiliated with or endorsed by the U.S.
                            Department of State or AIS
                        </li>
                    </ul>
                </div>

                <h2>12. Contact Us</h2>

                <div className="contact-section">
                    <p>
                        If you have any questions, concerns, or requests
                        regarding this Privacy Policy or our data practices,
                        please contact us at:
                    </p>

                    <p style={{ marginTop: '15px' }}>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:service@visaradar.cc">
                            service@visaradar.cc
                        </a>
                        <br />
                        <strong>Extension Name:</strong> VisaRadar.cc: AIS Auto
                        Rescheduler
                        <br />
                        <strong>Website:</strong>{' '}
                        <a href="https://visaradar.cc">
                            https://visaradar.cc
                        </a>
                    </p>

                    <p style={{ marginTop: '15px' }}>
                        We will respond to your inquiries within a reasonable
                        timeframe, typically within 5-7 business days.
                    </p>
                </div>

                <h2>13. Consent</h2>

                <p>
                    By installing and using the AIS Auto Rescheduler Extension,
                    you acknowledge that you have read, understood, and agree to
                    be bound by this Privacy Policy. If you do not agree with
                    this policy, please do not use our extension.
                </p>

                <div className="privacy-footer">
                    <p>&copy; 2025 VisaRadar.cc. All rights reserved.</p>
                    <p>
                        This privacy policy is effective as of the date listed
                        above and applies to all users of the AIS Auto
                        Rescheduler Extension.
                    </p>
                </div>
            </div>
        </div>
    );
}
