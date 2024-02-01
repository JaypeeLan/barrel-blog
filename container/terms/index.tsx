import { Text } from "@chakra-ui/react";

/* eslint-disable react/no-unescaped-entities */
const RenderTitle = ({ children }) => {
  return (
    <h1 className="font-medium text-[24px] text-[#101828] mb-3 mt-12 leading-8 tracking-[-0.2px]">
      {children}
    </h1>
  );
};

const RenderText = ({ children }) => {
  return (
    <Text className="font-normal text-base leading-[30px] tracking-[-0.2px] text-[#344054] ">
      {children}
    </Text>
  );
};

const TermsOfService = () => {
  const ProhibitedList = [
    "Access or use the Service or Authorized User data for any unlawful, infringing, threatening, abusive, obscene, harassing, defamatory, deceptive, or fraudulent purpose;",
    "Access or use the Service or access, transmit, process, or store User data   in violation of any applicable privacy laws or in any manner that would be a breach of contract or agreement with the applicable end-user;",
    "Access or use the Service to infringe any patent, trademark, trade secret, copyright, right of publicity, or other right of any person or entity;",
    "Access or use the Service for any purpose other than for which it is provided by Barrel, including for competitive evaluation, spying, creating a substitute or similar service to any of the Service, or other purposes;",
    "Scan or test (manually or in an automated fashion) the vulnerability of any Barrel’s infrastructure without express prior written permission from Barrel;",
    "Breach, disable, interfere with, or otherwise circumvent any security or authentication measures or any other aspect of the Service;",
    "Overload, flood, or spam any part of the Service;",
    "Create Customer accounts for the Service by any means other than our publicly- supported interfaces;",
    "Transfer, syndicate, resell, or otherwise distribute the Service or User data without express prior written permission from Barrel;",
    "Modify, translate, or otherwise create derivative works of any part of the Service;",
    "Access or use the Service or User data   in a manner that violates any agreement between the Customer or an Authorized User and Barrel; or",
    "Access or use the Service in a manner that violates any applicable law, statute, or regulation.",
  ];

  const LiabalityDisclaimer = [
    "Loss or liability resulting from access delays or access interruptions;",
    "Loss or liability resulting from data non-delivery or data mis-delivery;",
    "Loss or liability resulting from acts of god;",
    "Loss or liability resulting from the unauthorized use or misuse of the Customer’s account information (including any passwords);",
    "Loss or liability resulting from errors, omissions, or misstatements in any and all information or service(s) provided under this agreement;",
    "Loss or liability relating to the deletion of or failure to store e-mail messages;",
    "Loss or liability from the Customer’s inability to use any component of the service or other services;",
  ];
  return (
    <div className="">
      <h1 className="text-b-grey-8 font-semibold text-[46px] -mb-[4px] leading-[52px] tracking-[-0.206px]">
        Terms of Service
      </h1>
      <RenderTitle>Introduction</RenderTitle>
      <RenderText>
        These Terms of Use (these “Terms”) shall govern the use of the
        usebarrel.io website, mobile applications (“Services” or “Platform”) and
        the purchase of any service from it. These Terms constitute a binding
        and enforceable legal agreement between you, any other entity you may
        have created this Account on its behalf (the “Customer”) and Barrel
        Technologies Limited, its affiliated companies and you.
        <br /> By accessing and using the Service, you agree to comply with all
        these terms. These Terms shall apply each time you access or use the
        Service. If you are agreeing to the terms of these terms on behalf of an
        organization or entity, you represent and warrant that you are
        authorized to agree on behalf of that organization or entity. You are
        required to agree to the following terms of use.
        <strong className="text-[#1D2939] pl-2 track ">
          HENCE, BY CLICKING “I AGREE” AT THE END OF THESE TERMS, YOU INDICATE
          YOUR ACCEPTANCE TO THESE TERMS OF USE.
        </strong>
        <br />
        Please also review our Privacy Statement. The terms of the Privacy
        Statement and other supplemental terms, rules, policies, or documents
        that may be posted on the usebarrel.io website from time to time are
        hereby expressly incorporated herein by reference.
      </RenderText>
      <RenderTitle> Changes of Agreement</RenderTitle>
      <RenderText>
        Barrel reserves the right to modify this Agreement at its own
        discretion. If any modification to this Agreement is unacceptable to
        you, you may immediately terminate your account subject to applicable
        terms. If you do not terminate your account, or if you continue to use
        our Service or platform following any modification to these Terms, your
        continued use shall be deemed to indicate your acceptance to that
        modification. You are responsible for regularly reviewing these terms.
        We shall provide a version log of this Agreement at the bottom of the
        page.
      </RenderText>
      <RenderTitle>Registration</RenderTitle>
      <RenderText>
        To enroll for the Service, a Barrel Customer must create an account
        ('Account') by registering on barrel’s Site and providing true,
        accurate, and complete information about yourself, your entity and your
        use of the Service. A prospective Customer shall be deemed by Barrel to
        have honestly represented its identity or in any information that it may
        provide for its Account, and to keep the Account information up to date
        at all times. Barrel reserves the right to deny in its sole discretion
        any user access to Barrel or any portion thereof without notice. You are
        responsible for safeguarding the confidentiality of your password(s) and
        username(s) issued to you by Barrel, and for any use or misuse of your
        account or Barrel resulting from any third party using a password or
        username issued to you.
      </RenderText>
      <RenderTitle>Changes to the Website, Service and Platform</RenderTitle>
      <RenderText>
        Barrel retains the right to implement any changes to the Service
        (whether to free or paid features) at any time. Barrel reserves the
        right to limit or restrict access to offerings on its platform subject
        to agreed notice periods.
      </RenderText>
      <RenderTitle>Lawful Use and Compliance with Applicable Laws</RenderTitle>
      <RenderText>
        In relation to the use of the Service, the Customer undertakes to abide
        by all applicable local, state, national, and international laws and
        regulations. The Customer assumes sole responsibility for itself and
        agents in ensuring that its use of the Service is in compliance with all
        laws and regulations applicable in this regard. The Customer is solely
        responsible for ensuring that its use of the Service is in compliance
        with the rules and guidelines of any system or network that facilitates
        payments and any security requirements, including under the Payment Card
        Industry Data Security Standards (PCI-DSS) and any other financial
        service regulatory standards as may be applicable.
      </RenderText>
      <RenderTitle>Security</RenderTitle>
      <RenderText>
        Customers shall be responsible for securely maintaining authorized User
        authentication credentials, including their Biometric Verification
        Number and other confidential Authorized User information in their
        possession. Customers must notify Barrel immediately in the event of any
        breach or suspected breach of security including unauthorized use of its
        Customer account with Barrel or any Authorized User Data. Customers
        shall never publish, distribute, or share confidential Authorized User
        confidential information and must encrypt all data in storage and during
        transit.
      </RenderText>
      <br />
      <br />
      <RenderText>
        Concerning Authorized User Data, Customer undertakes to follow industry
        best practices but, at a minimum, must perform the following:
      </RenderText>
      <ul className="list-disc mt-3 mb-3 font-normal text-base leading-[30px] tracking-[-0.2px] text-[#344054]">
        <li>
          Maintain administrative, technical, and physical safeguards that are
          designed to protect the security, privacy, and confidentiality of
          Authorized User Data.
        </li>
        <li>
          Use modern and industry standard cryptography when transmitting any
          Authorized User data.
        </li>
        <li>
          Maintain reasonable access controls to ensure that only authorized
          people have access to any Authorized User data.
        </li>
        <li>
          Monitor your systems for any unauthorized access. Respond to security
          queries and vulnerabilities in a timely fashion.
        </li>
        <li>Plan for and respond to security vulnerabilities or incidents.</li>
        <li>
          Comply with relevant rules and regulations with regard to the type of
          data you are handling, such as the Safeguards Rule
        </li>
      </ul>
      <RenderTitle>Account Deactivation</RenderTitle>
      <RenderText>
        Customer's Accounts shall be deactivated from the Service in accordance
        with any applicable agreement between Barrel and such Customer. Barrel
        may also deactivate Customer Account if such a Customer has ceased using
        the Service for 12 months. With respect to the effluxion of time
        referred to in these Terms, any other service agreement between the
        Customer and Barrel also terminates.
      </RenderText>
      <br />
      <RenderText>
        Where a Customer's Account is deactivated, Barrel may still retain any
        information we collected about such a Customer for as long as necessary
        to fulfill the purposes outlined in our privacy statement, or for a
        longer retention period as required/permitted under applicable law.
      </RenderText>
      <RenderTitle>Prohibited Use</RenderTitle>
      <RenderText>
        The Customer agrees not to assist or otherwise enable any third party
        to:
      </RenderText>
      <ul className="list-disc mb-3 font-normal text-base leading-[30px] tracking-[-0.2px] text-[#344054] ">
        {ProhibitedList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <>
        <RenderTitle>Payment and Fees</RenderTitle>
        <RenderText>
          The Customer agrees to pay all product, service and placement fees on
          products and service purchased. Also, the Customer agrees to pay all
          state and federal taxes, duties, and assessments arising out of your
          use of the Barrel Services or Platform. The Customer further agrees to
          pay all attorney and collection fees arising from Barrels efforts to
          collect any past due amounts from the Customer to the extent allowed
          by law.
        </RenderText>
      </>
      <>
        <RenderTitle>Third Party Terms and Services </RenderTitle>
        <RenderText>
          In pursuance of Barrels obligations to the Customers and the continued
          provisioning of the Platform Barrel may incorporate other services
          provisioned by third Party providers (“third-party Services/Terms'').
          Barrel shall use all commercially reasonable efforts to ensure that
          its provisioning of the Service is consistent with all third-party
          Terms. In the event that the Customer’s use of the Service is in
          breach of any Third-Party Terms, without limitation to other rights of
          the Customer hereunder, Barrel shall provide the Customer with a
          notice of the breach together with a copy of the clause that had been
          breached. The Customer shall have thirty (30) days from such notice to
          cure the breach before it shall be deemed to be in default hereunder.
        </RenderText>
        <br />
        <RenderText>
          In the event that Barrel is required to cease providing the Services
          hereunder due to conflicts with said third party terms, it shall
          afford the Customer such time and reasonable assistance to wind-down
          its operations hereunder as such third-Party Terms will permit. 
        </RenderText>
        <br />
        <RenderText>
          To the extent that the effect of all third party terms may not have
          been expressly foreseen under these terms, and further occasion a
          material adverse effect on the Customer or have the effect of undoing
          the essential commercial bargain of this Agreement, then either Party
          shall have the right to terminate this Agreement on thirty (30) days’
          notice to the other Party without penalty or recourse and the Customer
          shall be afforded such time and reasonable assistance to wind-down its
          operations hereunder as such third-party terms may permit.
        </RenderText>
        <br />
        <RenderText>
          The Customer further release Barrel, its officers, employees, agents,
          and successors from claims, demands any and all losses, damages,
          rights, claims, and actions of any kind including personal injuries,
          death, and property damage, that is either directly or indirectly
          related to or arises from any interactions with or conduct of any
          third-party services or terms.
        </RenderText>
      </>
      <>
        <RenderTitle>Limitation of Liability Disclaimer</RenderTitle>
        <RenderText>
          The Customer agrees that Barrel’s entire liability with respect to use
          of the Service or Platform and that of any third-party providing
          services to Barrel or any other service used in order to provision the
          Platform, and the Customer’s exclusive remedy is solely limited to the
          amount paid for the use of our service in the last year subject to
          applicable law. We disclaim any and all loss or liability resulting
          from, but not limited to:
        </RenderText>

        <ul className="list-disc font-normal text-base leading-[30px] tracking-[-0.2px] text-[#344054]">
          {LiabalityDisclaimer.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <br />
        <RenderText>
          The Customer hereby acknowledges that this provision will apply
          whether or not Barrel has given a notice of the possibility of such
          damages and that this provision will apply to all services available
          through the Barrel platform. The terms of this Section will survive
          any termination or cancellation of this agreement.
        </RenderText>
      </>

      <>
        <RenderTitle>Termination</RenderTitle>
        <RenderText>
          Barrel may terminate this Agreement and the Customers access to the
          Platform or any of its Services (in whole or in part) at any time,
          with or without cause, and with or without notice. Anyone determined
          by Barrel to have violated these Terms of Use and Notices, or any
          Additional Terms may be barred from using the Platform, or from
          receiving any products, services or benefits from Barrel. In addition,
          if the Customer is in violation of any parts of these Terms of Use the
          Customer shall forfeit all in-kind credits accruing to the Customer
          (if any) in connection with Barrel. Upon any termination of this
          Agreement, the Customer’s right to use the Platform or any of its
          Services shall automatically terminate.
        </RenderText>
      </>

      <>
        <RenderTitle>General</RenderTitle>
        <RenderText>
          This agreement constitutes the entire agreement between the Customer
          and Barrel with respect to the Platform and its use of Barrel
          supersedes all prior agreements between the Customer and Barrel
          pertaining to the same. Barrel’s failure to enforce any provision of
          this agreement will not be construed as a waiver of any provision or
          right. 
        </RenderText>
        <br />

        <RenderText>
          In the event that a portion of this agreement is held unenforceable,
          the unenforceable portion will be construed in accordance with
          applicable law as nearly as possible to reflect the original
          intentions of the parties, and the remainder of the provisions will
          remain in full force and effect.
        </RenderText>
        <br />

        <RenderText>
          Interpretation and enforcement of this agreement will be governed by
          the laws of the Federal Republic of Nigeria (excluding its choice of
          law rules). The Customer hereby consent to non-exclusive jurisdiction
          in the High Courts of the Federal Republic of Nigeria for any action
          arising out of or related in any way to this Agreement or relating to
          its use of Barrel (or any component thereof). Nothing in this
          agreement will be construed as creating a joint venture, partnership,
          employment or agency relationship between the Customer and Barrel, and
          the Customer does not have any authority to create any obligation or
          make any representation on Barrel’s behalf, unless a specific written
          agreement between the Customer and Barrel is made. Other than as
          specified herein, neither party makes any representations, or assumes
          or creates any obligations, on behalf of the other. 
        </RenderText>
        <RenderText>
          The Customer may not assign this agreement, by operation of law or
          otherwise, without Barrel’s written consent. Subject to the foregoing,
          this agreement will be binding on, inure to the benefit of and be
          enforceable against the Customer and Barrel and their respective
          successors and assigns. The terms of this Section will survive any
          termination of this agreement.
        </RenderText>
      </>

      <>
        <RenderTitle>12. Indemnification</RenderTitle>
        <RenderText>
          The Customer agree to defend, indemnify, and hold Barrel and its
          contractors, agents, employees, officers, directors, shareholders,
          affiliates and assigns harmless from and against any and all claims,
          liabilities, damages, costs and expenses (including reasonable
          attorneys’ fees and expenses) of third parties arising from or related
          to its use of the Platform or any of its Services.
        </RenderText>
      </>

      <>
        <div className=" text-end mt-[104px] mb-[247px]">
          <p className="font-medium text-[#101828] tracking-[-0.2px] leading-[32px] text-base">
            Last updated January 06, 2024
          </p>
        </div>
      </>
    </div>
  );
};

export default TermsOfService;
