import React from "react"

const LegalAndPrivacy = () => {
  return (
    <div
      className="bg-[#FFF1E1]"
      style={{
        fontFamily: "Alegreya",
      }}
    >
      <div className="container mx-auto p-6  ">
        <h3 className="text-left sm:text-center py-3 font-semibold">
          Copyright
        </h3>
        <p>
          Copyright © Capenews Newsletter. All rights reserved. The content of
          Capenews Newsletter, including articles, images, and other materials,
          is protected by copyright and may not be reproduced, distributed, or
          transmitted in any form or by any means without the prior written
          permission of the publisher. Any unauthorized use or distribution of
          the content is strictly prohibited and may result in legal action.
          Capenews Newsletter reserves the right to edit or reject any submitted
          content at its discretion. The opinions expressed in the newsletter
          are those of the authors and do not necessarily reflect the views of
          the publisher. All information in the newsletter is provided on an "as
          is" basis without warranties of any kind, either express or implied.
          Capenews Newsletter makes no representation or warranty as to the
          accuracy, completeness, or reliability of any information contained in
          the newsletter, and shall not be liable for any errors, omissions, or
          damages arising from the use of such information.
        </p>
        <h3 className="text-left sm:text-center py-3 font-semibold">
          Privacy Policy
        </h3>
        <p>
          Capenews Newsletter is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and disclose your
          personal information in connection with your use of our newsletter.
        </p>
        <div>
          <h6 className="mt-3 font-medium text-lg">Information we collect:</h6>
          <p>
            We collect your email address when you subscribe to Capenews
            Newsletter. We may also collect other information that you provide
            to us, such as your name, location, and interests.
          </p>
        </div>
        <div>
          <h6 className="mt-3 font-medium text-lg">
            How we use your information:
          </h6>
          <p>
            We use your email address to send you regular updates about Capenews
            Newsletter, including articles, news, and other information that we
            think may be of interest to you. We may also use your information to
            improve our newsletter and to personalize your experience.
          </p>
        </div>
        <div>
          <h6 className="mt-3 font-medium text-lg">
            How we disclose your information:
          </h6>
          <p>
            We do not disclose your personal information to third parties
            without your consent, except as required by law. We may share your
            information with our service providers who assist us in providing
            the newsletter to you.
          </p>
        </div>
        <div>
          <h6 className="mt-3 font-medium text-lg">Security:</h6>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, we cannot
            guarantee the security of your information.
          </p>
        </div>
        <div>
          <h6 className="mt-3 font-medium text-lg">
            Changes to this Privacy Policy:
          </h6>
          <p>
            We may update this Privacy Policy from time to time. The most
            current version of the policy will be posted on our website.
          </p>
        </div>
        <div>
          <h6 className="mt-3 font-medium text-lg">Contact Us:</h6>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our practices, please contact us at{" "}
            <a href="mailto:capenews@capenews.net" className="text-blue-600">
              capenews@capenews.net
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default LegalAndPrivacy
