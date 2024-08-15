import { SECTIONS } from "constants/home.constants";
import { Tooltip } from "react-tooltip";

export default function SocialIcons() {
    return (
        <>
            <div className="social-icons">
                <a
                    href={SECTIONS.CONTACT.LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tooltip-id="linkedin-tooltip"
                >
                    <img src="icons/contact/linkedin.svg" alt="Linkedin icon" />
                </a>

                <a
                    href={`mailto:${SECTIONS.CONTACT.MAIL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tooltip-id="mail-tooltip"
                >
                    <img src="icons/contact/mail.svg" alt="Linkedin icon" />
                </a>

                <a
                    href={`https://wa.me/${SECTIONS.CONTACT.PHONE_PREFIX}${SECTIONS.CONTACT.PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tooltip-id="whatsapp-tooltip"
                >
                    <img src="icons/contact/phone.svg" alt="Linkedin icon" />
                </a>
            </div>

            <Tooltip
                id="linkedin-tooltip"
                place="bottom"
                content="My Linkedin profile"
                className="tools__tooltip"
            />

            <Tooltip
                id="mail-tooltip"
                place="bottom"
                content="Send me an email"
                className="tools__tooltip"
            />

            <Tooltip
                id="whatsapp-tooltip"
                place="bottom"
                content="Send me a message"
                className="tools__tooltip"
            />
        </>
    );
}
