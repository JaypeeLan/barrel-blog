import { cn } from "helpers/cn";

/* eslint-disable react/no-unescaped-entities */
const RenderTitle = ({ children }) => {
  return (
    <h1 className="text-[#101828] font-semibold text-2xl leading-[52px] tracking-[-0.206px] mb-3 mt-12">
      {children}
    </h1>
  );
};

const RenderText = ({ children, className }: any) => {
  return (
    <h1
      className={cn(
        "font-normal text-base leading-[30px] tracking-[-0.2px] text-[#344054]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const PrivacyPolicy = () => {
  const DefinitionsList = [
    {
      term: "BARREL",
      definition: "means the proprietors of the Website or Platform.",
    },
    {
      term: "Data Controller",
      definition:
        "Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information is, or are to be, processed.",
    },
    {
      term: "Data Processor",
      definition:
        "Data Processor means any natural or legal person who processes the data on behalf of the Data Controller.",
    },
    {
      term: "Data Subject",
      definition:
        "Data Subject is any natural person who is using our Service (“you”) and is the subject of Personal Data.",
    },
  ];

  const termsAndDefinitions = [
    {
      term: "Fairness and lawfulness",
      definition:
        "When we process personal data, the individual rights of the Data Subjects must be protected. All personal data must be collected and processed in a legal and fair manner.",
    },
    {
      term: "Restricted to a specific purpose",
      definition:
        "The personal data of Data Subject must be processed only for specific purposes.",
    },
    {
      term: "Transparency",
      definition:
        "The Data Subject must be informed of how his/her data is being collected, processed and used.",
    },
  ];

  const servicesArray = [
    "To provide you with our services",
    "To notify you about changes to our services and/or products",
    "To provide you with support",
    "To gather analysis or valuable information so that we can improve our services",
    "To personalize your ads",
    "To detect, prevent and address technical issues",
    "To provide you with marketing communications",
    "To enforce our Terms of Use",
    "To process payments for our service or on the Platform",
  ];

  const consentStatements = [
    "You have given us your consent to do so",
    "You have given us your consent in order to perform a contract with you",
    "Processing your personal data is in our legitimate business interests",
    "Barrel needs to comply with the applicable law and regulations",
  ];

  const additionalConsentStatements = [
    "Our Professional Advisers and Auditors",
    "External professional IT Service Providers such as Cloud Storage Providers, Data Hosting Platforms etc.",
    "Third parties engaged in the course of providing services to you with their prior consent.",
  ];

  const dataSubjectRights = [
    "The right to access, update or to delete the information we have on you",
    "The right of rectification",
    "The right to object",
    "The right of restriction",
    "The right to data portability",
    "The right to withdraw consent",
  ];

  return (
    <div className="leading-[30px]">
      <h1 className="text-[#1D2939] font-[600] text-[46px] mb-[44px] leading-10">
        Privacy Policy
      </h1>

      <>
        <RenderText>
          This Privacy Policy explains the ways Barrel (“we”) collects, uses,
          and shares personal data about a User or visitor (“you”) in connection
          with your access to the Platform or any of its Services (“our
          services” or” our platform”) and in connection with any other
          information Barrel collects when you use the Platform or any of its
          Services.
        </RenderText>
        <br />
        We value your privacy and care about the way in which your personal
        information is handled, stored and shared. Hence, we are committed to
        safeguarding the privacy of the persons whose information had been
        provided to us or collected by us during the course of playing or that
        personal information we receive from visitors to our website.
        <RenderText>{""}</RenderText>
      </>

      <>
        <RenderTitle>Definitions</RenderTitle>
        <ol className="list-decimal">
          {DefinitionsList.map((item, idx) => (
            <li
              key={idx}
              className="text-[#344054] font-normal text-base leading-[30px] tracking-[-0.2px]"
            >
              <strong>{item.term}:</strong> {item.definition}
            </li>
          ))}
        </ol>
      </>

      <>
        <RenderTitle>Principles for processing personal data</RenderTitle>
        <RenderText>
          Our principles for processing personal data are:
        </RenderText>
        <ol className="list-decimal">
          {termsAndDefinitions.map((item, idx) => (
            <li
              key={idx}
              className="text-[#344054] font-normal text-base leading-[30px] tracking-[-0.2px]"
            >
              <strong>{item.term}:</strong> {item.definition}
            </li>
          ))}
        </ol>
      </>

      <>
        <RenderTitle>What personal data we collect and process</RenderTitle>
        <RenderText>
          Barrel collects several different types of personal data for various
          purposes. Personal Data may include, but is not limited to email
          address, First name, last name, Phone number, Address, Date of Birth,
          State, Province, ZIP/Postal code, City, Country, necessary financial
          information etc.  
        </RenderText>
      </>

      <>
        <RenderTitle>How we use the personal data</RenderTitle>
        <RenderText>
          Barrel uses the collected personal data for various purposes:
        </RenderText>
        <ol className="list-decimal">
          {servicesArray.map((item, idx) => (
            <li
              key={idx}
              className="text-[#344054] font-normal text-base leading-[30px] tracking-[-0.2px]"
            >
              {item}
            </li>
          ))}
        </ol>
      </>

      <>
        <RenderTitle>
          Legal basis for collecting and processing personal data
        </RenderTitle>
        <RenderText>
          Barrel’s legal basis for collecting and using the personal data
          described in this Data Protection Policy depends on the personal data
          we collect and the specific context in which we collect the
          information:
        </RenderText>
        <br />

        <ul className="list-disc">
          {consentStatements.map((item, idx) => (
            <li
              key={idx}
              className="text-[#344054] font-normal text-base leading-[30px] tracking-[-0.2px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </>

      <>
        <RenderTitle>Retention of personal data</RenderTitle>
        <RenderText>
          We may retain your personal information only for as long as is
          necessary for the purposes set out in this Privacy Statement. We may
          retain and use your information to the extent necessary to comply with
          our legal obligations, resolve disputes, and enforce our policies.
        </RenderText>
      </>

      <>
        <RenderTitle>
          Third parties access to personal data collected by Barrel
        </RenderTitle>

        <RenderText>
          Barrel may share your personal information with certain trusted third
          parties in accordance with contractual arrangements in place with
          them, including:
        </RenderText>

        <ul className="list-disc">
          {additionalConsentStatements.map((item, idx) => (
            <li
              key={idx}
              className="text-[#344054] font-normal text-base leading-[30px] tracking-[-0.2px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <br />
        <RenderText>
          Where necessary, or for the reasons set out in our policy, personal
          information may also be shared with regulatory authorities, courts,
          tribunals, government agencies and law enforcement agencies. Barrel
          may also be required to disclose your information to comply with legal
          or regulatory requirements. Barrel will use reasonable endeavors to
          notify you before it does this unless we are legally restricted from
          doing so.
        </RenderText>
      </>

      <>
        <RenderTitle>Your Right. </RenderTitle>
        <RenderText>
          The applicable data protection laws (which may vary from territory to
          territory) provide certain rights for you with respect to personal
          information.
        </RenderText>
        <br />
        <RenderText>
          Notwithstanding where you may be resident, your data right would be
          respected and Barrel remains committed to upholding your rights under
          the applicable data protection and governance laws in your country.
          Primarily, we understand that your data protection rights shall but
          not limited to the following include :
        </RenderText>

        <ul className="list-disc">
          {dataSubjectRights.map((item, idx) => (
            <li
              key={idx}
              className="text-[#344054] font-normal text-base leading-[30px] tracking-[-0.2px]"
            >
              {item}
            </li>
          ))}
        </ul>

        <RenderText>
          You are entitled to request details of the information we hold about
          you and how we process it. You may also have a right in accordance
          with applicable data protection law to have it rectified or deleted,
          to restrict our processing of that information, to stop transfers of
          your personal information to a third party and, in some circumstances,
          to have personal information relating to you transferred to another
          organization.  You may also have the right to lodge a complaint in
          relation to how we have processed your personal information with the
          relevant regulatory authority
        </RenderText>

        <RenderText>
          If you object to the processing of your personal information, or if
          you have provided your consent to processing and you later choose to
          withdraw it, we will respect that choice in accordance with our legal
          obligations. Please email us here at{" "}
          <a href="mailto:hello@usebarrel.io" className="underline">
            hello@usebarrel.io
          </a>
        </RenderText>

        <RenderText>
          Please note that even after you have chosen to withdraw your consent
          we may be able to continue to process your personal information to the
          extent required or otherwise permitted by relevant law, in particular
          in connection with exercising and defending our legal rights or
          meeting our legal and regulatory obligations. This Privacy statement
          shall be subject to our Data Retention schedule and internal policies
          as extant law may require. 
        </RenderText>

        <RenderText>
          You may wish to inform us of any update to any information you may
          have with us, please email us here{" "}
          <a href="mailto:hello@usebarrel.io" className="underline">
            hello@usebarrel.io
          </a>
        </RenderText>
      </>

      <>
        <RenderTitle>International Data Transfer </RenderTitle>
        <RenderText>
          The information we collect about you may be transferred, used, or
          stored in any country where we have operations or where we engage
          service providers. That means that your information may be transferred
          to a different country than where it was collected, and which may not
          provide equivalent levels of data protection as Nigeria.
        </RenderText>
        <br />
        <RenderText>
          The level of Data protection in countries outside Nigeria may be less
          than that offered within Nigeria. Where this is the case, Barrel shall
          implement appropriate measures to ensure that your personal
          information remains protected and secure in accordance with applicable
          data protection laws, guidelines, and standards in Nigeria at the
          least. Nigerian standard contractual clauses are in place between all
          foreign entities that share and process personal data.
        </RenderText>
        <br />
        <RenderText>
          Where our third-party service providers process personal data outside
          Nigeria in the course of providing services to us, our written
          agreement with them will include appropriate measures, usually
          standard contractual clauses on data sharing in accordance with
          prevailing local and international standards.
        </RenderText>
      </>

      <>
        <RenderTitle>Changes to this Statement</RenderTitle>
        <RenderText>
          Barrel may change this Statement at any time for several reasons.
          However, if we make changes to this statement, it shall notify you by
          updating the effective date at the top of this Statement. Barrel may
          also provide notice of any changes through other means, such as
          placing a notice on our homepage at usebarrel.io or sending you an
          email. We encourage you to review the Privacy Statement whenever you
          access the Services or otherwise interact with us to stay informed
          about our data practices and the choices available to you.
        </RenderText>
      </>

      <>
        <RenderTitle>ELECTRONIC CONSENT</RenderTitle>
        <RenderText>
          Clicking on the "Agree" button on this page or before the creation of
          your account you indicate that:• you have ready the above information•
          you voluntarily agree to participate• you are at least 18 years of
          ageIf you do not Agree please decline the creation of our account and
          use of the Platform by clicking on the "disagree" button.
        </RenderText>

        <RenderText>
          Data Protection Officer –{" "}
          <a href="mailto:hello@usebarrel.io" className="underline">
            hello@usebarrel.io
          </a>
        </RenderText>
      </>

      <>
        <div className=" text-end mt-[104px] mb-[247px]">
          <RenderText className="font-medium text-[#101828]">
            Last updated January 06, 2024
          </RenderText>
        </div>
      </>
    </div>
  );
};
