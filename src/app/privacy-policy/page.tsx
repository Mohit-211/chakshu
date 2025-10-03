// src/app/privacy-policy/page.tsx
"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 lg:px-8 py-12 gap-8">
      {/* Sidebar (desktop only) */}
      <aside className="hidden md:block md:w-1/4 sticky top-24 self-start">
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Contents</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#infocollect" className="text-blue-600 hover:underline">
                1. What Information Do We Collect?
              </a>
            </li>
            <li>
              <a href="#infouse" className="text-blue-600 hover:underline">
                2. How Do We Process Your Information?
              </a>
            </li>
            <li>
              <a href="#whoshare" className="text-blue-600 hover:underline">
                3. When & With Whom Do We Share?
              </a>
            </li>
            <li>
              <a href="#cookies" className="text-blue-600 hover:underline">
                4. Cookies & Tracking
              </a>
            </li>
            <li>
              <a href="#inforetain" className="text-blue-600 hover:underline">
                5. How Long Do We Keep Data?
              </a>
            </li>
            <li>
              <a href="#infosafe" className="text-blue-600 hover:underline">
                6. How Do We Keep Data Safe?
              </a>
            </li>
            <li>
              <a href="#infominors" className="text-blue-600 hover:underline">
                7. Minors Data Policy
              </a>
            </li>
            <li>
              <a
                href="#privacyrights"
                className="text-blue-600 hover:underline"
              >
                8. Your Privacy Rights
              </a>
            </li>
            <li>
              <a href="#DNT" className="text-blue-600 hover:underline">
                9. Do-Not-Track Controls
              </a>
            </li>
            <li>
              <a
                href="#policyupdates"
                className="text-blue-600 hover:underline"
              >
                10. Policy Updates
              </a>
            </li>
            <li>
              <a href="#contact" className="text-blue-600 hover:underline">
                11. Contact Us
              </a>
            </li>
            <li>
              <a href="#request" className="text-blue-600 hover:underline">
                12. Review/Update/Delete Data
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-12">
        {/* Section 1: Intro */}
        <section className="bg-white shadow-md rounded-xl p-8 border">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-6">
            Last updated: October 03, 2025
          </p>
          <p>
            This Privacy Notice for <strong>Petal and Promise</strong> (doing
            business as <strong>Petal &amp; Promise</strong>) (“we,” “us,” or
            “our”), describes how and why we might access, collect, store, use,
            and/or share your personal information when you use our services.
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>
              Visit our website at{" "}
              <a
                href="https://petalandpromise.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://petalandpromise.in
              </a>
            </li>
            <li>
              Use <strong>Matchmaking and Relationship Counseling</strong>:
              involves forms, shortlisting, introductions, and counseling.
            </li>
            <li>Engage with us in sales, marketing, or events.</li>
          </ul>
          <p>
            <strong>Questions or concerns?</strong> Contact us at{" "}
            <a
              href="mailto:info@petalandpromise.in"
              className="text-blue-600 underline"
            >
              info@petalandpromise.in
            </a>
            .
          </p>
        </section>

        {/* Section 2: Summary */}
        <section className="bg-white shadow-md rounded-xl p-8 border">
          <h2 className="text-2xl font-semibold mb-4">Summary of Key Points</h2>
          <p className="italic text-gray-600 mb-4">
            This summary highlights key points. For details, use the table of
            contents or see each section.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>What info do we process?</strong> Depends on how you use
              our services.{" "}
              <a href="#personalinfo" className="text-blue-600 underline">
                Learn more
              </a>
              .
            </li>
            <li>
              <strong>Sensitive info?</strong> We may process with consent
              (ethnicity, orientation, beliefs).{" "}
              <a href="#sensitiveinfo" className="text-blue-600 underline">
                Learn more
              </a>
              .
            </li>
            <li>
              <strong>Third-party collection?</strong> No, we don’t collect from
              third parties.
            </li>
            <li>
              <strong>How do we process?</strong> For service delivery, fraud
              prevention, compliance.{" "}
              <a href="#infouse" className="text-blue-600 underline">
                Learn more
              </a>
              .
            </li>
            <li>
              <strong>Sharing?</strong> Limited cases.{" "}
              <a href="#whoshare" className="text-blue-600 underline">
                Learn more
              </a>
              .
            </li>
            <li>
              <strong>Safety?</strong> Strong measures, but no system is 100%
              secure.{" "}
              <a href="#infosafe" className="text-blue-600 underline">
                Learn more
              </a>
              .
            </li>
            <li>
              <strong>Your rights?</strong> Varies by location.{" "}
              <a href="#privacyrights" className="text-blue-600 underline">
                Learn more
              </a>
              .
            </li>
          </ul>
        </section>

        {/* Section 3: Info Collection */}
        <section
          id="infocollect"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            1. What Information Do We Collect?
          </h2>
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <p>
            <strong>In Short:</strong> Info you give us directly.
          </p>
          <ul className="list-disc pl-6 my-3 space-y-1">
            <li>Names, phone numbers, email, job titles</li>
            <li>Contact preferences & authentication data</li>
            <li>Relationship details & private history</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6">Sensitive Information</h3>
          <ul className="list-disc pl-6 my-3 space-y-1">
            <li>Sexual orientation</li>
            <li>Ethnicity</li>
            <li>Religious or philosophical beliefs</li>
            <li>Financial data</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6">
            Automatically Collected
          </h3>
          <p>
            IP, device, browser, logs, usage patterns, location data. We may use
            cookies.
          </p>
          <h3 className="text-lg font-semibold mt-6">Google API</h3>
          <p>
            Our use complies with{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google API Services User Data Policy
            </a>{" "}
            and{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Limited Use requirements
            </a>
            .
          </p>
        </section>

        {/* Section 2: Processing Information */}
        <section
          id="infouse"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            2. How Do We Process Your Information?
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>In Short:</strong> We process your information to provide,
            improve, and administer our Services, communicate with you, for
            security and fraud prevention, and to comply with law. We may also
            process your information for other purposes with your consent.
          </p>

          <p className="text-gray-700 font-medium mb-2">
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>To deliver and facilitate services:</strong> Providing you
              with the requested service.
            </li>
            <li>
              <strong>To respond to inquiries & support:</strong> Handling
              questions and resolving issues.
            </li>
            <li>
              <strong>To send administrative information:</strong> Updates about
              products, services, terms, and policies.
            </li>
            <li>
              <strong>To fulfill and manage orders:</strong> Payments, returns,
              and exchanges.
            </li>
            <li>
              <strong>To request feedback:</strong> Asking about your experience
              with our Services.
            </li>
            <li>
              <strong>To send marketing & promotions:</strong> Used for
              marketing (if in line with your preferences). You can opt out at
              any time. See{" "}
              <a href="#privacyrights" className="text-blue-600 underline">
                What Are Your Privacy Rights?
              </a>
              .
            </li>
            <li>
              <strong>To deliver targeted advertising:</strong> Developing and
              showing personalized content and ads.
            </li>
            <li>
              <strong>To protect our Services:</strong> Security, fraud
              monitoring, and prevention.
            </li>
            <li>
              <strong>To evaluate & improve Services:</strong> Usage trends,
              campaign effectiveness, and service quality.
            </li>
            <li>
              <strong>To measure marketing effectiveness:</strong> Understanding
              what works best for you.
            </li>
          </ul>
        </section>

        {/* Section 3: Sharing Information */}
        <section
          id="whoshare"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            3. When and With Whom Do We Share Your Personal Information?
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following
            categories of third parties.
          </p>

          <p className="text-gray-700 mb-2">
            <strong>
              Vendors, Consultants, and Other Third-Party Service Providers:
            </strong>{" "}
            We may share your data with third-party vendors, service providers,
            contractors, or agents who perform services for us or on our behalf
            and require access to such information to do that work.
          </p>

          <p className="text-gray-700 font-medium mb-2">
            Categories of third parties we may share information with include:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
            <li>Data Storage Service Providers</li>
            <li>Ad Networks</li>
            <li>Cloud Computing Services</li>
            <li>Data Analytics Services</li>
            <li>Communication & Collaboration Tools</li>
            <li>Order Fulfillment Service Providers</li>
            <li>Social Networks</li>
            <li>Sales & Marketing Tools</li>
            <li>Retargeting Platforms</li>
            <li>Payment Processors</li>
            <li>Website Hosting Service Providers</li>
            <li>User Account Registration & Authentication Services</li>
            <li>AI Platforms</li>
            <li>Service Facilitators</li>
          </ul>

          <p className="text-gray-700 font-medium mb-2">
            We may also share your personal information in the following
            situations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Business Transfers:</strong> In connection with, or during
              negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or part of our business to another company.
            </li>
            <li>
              <strong>Affiliates:</strong> With our affiliates, requiring them
              to honor this Privacy Notice. Affiliates include our parent
              company, subsidiaries, joint ventures, or other companies under
              common control.
            </li>
            <li>
              <strong>Business Partners:</strong> With business partners to
              offer you certain products, services, or promotions.
            </li>
          </ul>
        </section>

        {/* Section 4: Cookies and Tracking */}
        <section
          id="cookies"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            4. Do We Use Cookies and Other Tracking Technologies?
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>In Short:</strong> We may use cookies and other tracking
            technologies to collect and store your information.
          </p>

          <p className="text-gray-700 mb-3">
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to gather information when you interact with our
            Services. These technologies help us maintain security, prevent
            crashes, fix bugs, save your preferences, and support basic site
            functions.
          </p>

          <p className="text-gray-700 mb-3">
            We also allow third parties and service providers to use online
            tracking technologies for analytics and advertising — including
            managing and displaying ads, tailoring them to your interests, or
            sending reminders (e.g., abandoned shopping carts). Their
            technologies may deliver ads tailored to you on our Services or
            elsewhere online.
          </p>

          <p className="text-gray-700 mb-6">
            Specific details about how we use such technologies and how you can
            refuse certain cookies are outlined in our Cookie Notice.
          </p>

          <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
          <p className="text-gray-700 mb-3">
            We may share your information with Google Analytics to track and
            analyze use of the Services. Features we may use include:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
            <li>Google Display Network Impressions Reporting</li>
            <li>Google Analytics Demographics and Interests Reporting</li>
            <li>Remarketing with Google Analytics</li>
          </ul>

          <p className="text-gray-700">
            To opt out of Google Analytics tracking, visit{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            . You can also manage preferences at{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Ads Settings
            </a>{" "}
            and through mobile app settings. Other options include{" "}
            <a
              href="http://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              http://optout.networkadvertising.org/
            </a>{" "}
            and{" "}
            <a
              href="http://www.networkadvertising.org/mobile-choice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              http://www.networkadvertising.org/mobile-choice
            </a>
            . For more on Google’s practices, visit the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Privacy & Terms
            </a>{" "}
            page.
          </p>
        </section>

        {/* Section 5: Retention */}
        <section
          id="inforetain"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            5. How Long Do We Keep Your Information?
          </h2>

          <p className="text-gray-700 mb-3">
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this Privacy Notice
            unless otherwise required by law.
          </p>

          <p className="text-gray-700 mb-3">
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this Privacy Notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements).
          </p>

          <p className="text-gray-700">
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize it. If
            deletion is not possible (e.g., stored in backups), we will securely
            store and isolate it until deletion becomes possible.
          </p>
        </section>

        {/* Section 6: Safety */}
        <section
          id="infosafe"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            6. How Do We Keep Your Information Safe?
          </h2>

          <p className="text-gray-700 mb-3">
            <strong>In Short:</strong> We aim to protect your personal
            information through a system of organizational and technical
            security measures.
          </p>

          <p className="text-gray-700 mb-3">
            We have implemented reasonable technical and organizational security
            measures designed to protect any personal information we process.
            However, no electronic transmission or storage system can be
            guaranteed 100% secure, and we cannot promise or guarantee that
            unauthorized parties will never be able to defeat our safeguards.
          </p>

          <p className="text-gray-700">
            While we work hard to protect your data, transmitting personal
            information to and from our Services is at your own risk. Always use
            our Services within a secure environment.
          </p>
        </section>

        {/* Section 7: Minors */}
        <section
          id="infominors"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            7. Do We Collect Information From Minors?
          </h2>

          <p className="text-gray-700 mb-3">
            <strong>In Short:</strong> We do not knowingly collect data from or
            market to children under 18 years of age.
          </p>

          <p className="text-gray-700 mb-3">
            We do not knowingly collect, solicit data from, or market to
            children under 18 years of age, nor do we knowingly sell such
            personal information. By using our Services, you confirm that you
            are at least 18 or are the parent or guardian of a minor and consent
            to their use of the Services.
          </p>

          <p className="text-gray-700 mb-3">
            If we discover that data has been collected from users under 18, we
            will deactivate the account and take reasonable measures to promptly
            delete such data from our records.
          </p>

          <p className="text-gray-700">
            If you become aware of any data we may have collected from children
            under 18, please contact us at{" "}
            <a
              href="mailto:info@petalandpromise.in"
              className="text-blue-600 underline"
            >
              info@petalandpromise.in
            </a>
            .
          </p>
        </section>

        {/* Section 8: Privacy Rights */}
        <section
          id="privacyrights"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            8. What Are Your Privacy Rights?
          </h2>

          <p className="text-gray-700 mb-3">
            <strong>In Short:</strong> Depending on your country, province, or
            state of residence, you may review, change, or terminate your
            account at any time.
          </p>

          <h3 className="text-lg font-semibold mt-4">
            Withdrawing your consent
          </h3>
          <p className="text-gray-700 mb-3">
            If we rely on your consent to process your personal information
            (express or implied, depending on law), you may withdraw it at any
            time by contacting us through the details in the{" "}
            <a href="#contact" className="text-blue-600 underline">
              Contact Us
            </a>{" "}
            section.
          </p>

          <p className="text-gray-700 mb-3">
            Withdrawing consent does not affect prior lawful processing and may
            not affect processing under other legal grounds where permitted by
            law.
          </p>

          <h3 className="text-lg font-semibold mt-4">
            Opting out of marketing & communications
          </h3>
          <p className="text-gray-700 mb-3">
            You can unsubscribe anytime by clicking “unsubscribe” in our emails,
            replying “STOP” or “UNSUBSCRIBE” to SMS messages, or contacting us
            via the{" "}
            <a href="#contact" className="text-blue-600 underline">
              Contact Us
            </a>{" "}
            section. Service-related messages (like account updates) may still
            be sent.
          </p>

          <h3 className="text-lg font-semibold mt-4">
            Cookies & similar technologies
          </h3>
          <p className="text-gray-700 mb-3">
            Most browsers accept cookies by default. You can remove or reject
            them, but doing so may affect certain features or services.
          </p>

          <p className="text-gray-700">
            For questions or comments about your privacy rights, email us at{" "}
            <a
              href="mailto:info@petalandpromise.in"
              className="text-blue-600 underline"
            >
              info@petalandpromise.in
            </a>
            .
          </p>
        </section>

        {/* Section 9: Do-Not-Track Controls */}
        <section id="DNT" className="bg-white shadow-md rounded-xl p-8 border">
          <h2 className="text-2xl font-semibold mb-4">
            9. Controls for Do-Not-Track Features
          </h2>
          <p className="text-gray-700 mb-3">
            Most web browsers and some mobile operating systems and apps include
            a <strong>Do-Not-Track ("DNT")</strong> feature or setting you can
            enable to signal your privacy preference — meaning you do not want
            data about your online browsing activities monitored or collected.
          </p>
          <p className="text-gray-700 mb-3">
            At this time, no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online.
          </p>
          <p className="text-gray-700">
            If a standard for online tracking is adopted that we must follow in
            the future, we will update this Privacy Notice to let you know about
            that practice.
          </p>
        </section>

        {/* Section 10: Updates */}
        <section
          id="policyupdates"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            10. Do We Make Updates to This Notice?
          </h2>
          <p className="text-gray-700 mb-3">
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </p>
          <p className="text-gray-700 mb-3">
            We may update this Privacy Notice from time to time. The updated
            version will be indicated by an updated <em>“Revised”</em> date at
            the top of this Privacy Notice. If we make material changes, we may
            notify you either by prominently posting a notice of such changes or
            by directly sending you a notification.
          </p>
          <p className="text-gray-700">
            We encourage you to review this Privacy Notice frequently to stay
            informed about how we are protecting your information.
          </p>
        </section>

        {/* Section 11: Contact */}
        <section
          id="contact"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            11. How Can You Contact Us About This Notice?
          </h2>
          <p className="text-gray-700 mb-3">
            If you have questions or comments about this notice, you may email
            us at{" "}
            <a
              href="mailto:info@petalandpromise.in"
              className="text-blue-600 underline"
            >
              info@petalandpromise.in
            </a>
          </p>
        </section>

        {/* Section 12: Review/Update/Delete */}
        <section
          id="request"
          className="bg-white shadow-md rounded-xl p-8 border"
        >
          <h2 className="text-2xl font-semibold mb-4">
            12. How Can You Review, Update, or Delete the Data We Collect From
            You?
          </h2>
          <p className="text-gray-700 mb-3">
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            details about how we have processed it, correct inaccuracies, or
            delete your personal information. You may also have the right to
            withdraw your consent to our processing of your personal
            information. These rights may be limited in some circumstances by
            applicable law.
          </p>
          <p className="text-gray-700">
            To request to review, update, or delete your personal information,
            please{" "}
            <a
              href="https://app.termly.io/dsar/9419ae52-1a74-4a78-b7ff-a41e99319e33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              fill out and submit a data subject access request
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
