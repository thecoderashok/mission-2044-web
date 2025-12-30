import React, { useRef } from "react";
import { useClassNames } from "../../hook/useClassNames";
import { useFormSubmit } from "../../hook/useFormSubmit";
import Button from "../Button/Button";
import IntlTelInputField from "./IntlTelInputField";
import { getMailerSettings } from "../../mailerSettings";

const ContactForm = () => {
    const classes = useClassNames();
    const formRef = useRef(null);

    const {
        formData,
        handleChange,
        handleSubmit,
        intlTelInputRef,
        formValidation,
        setFormValidation,
        setFormData,
    } = useFormSubmit({
        initialData: {
            fullname: "",
            email: "",
            phone: "",
            sport: "",
            message: "",
        },
        handleValidation: (fields, intlTelInputRef) => {
            const isEmpty = (value) => !value || !String(value).trim();
            const validation = {};

            const validateField = ({ name, condition, errorMessage } = {}) => {
                if (condition) {
                    validation[name] = {
                        error: errorMessage,
                        isInvalid: true,
                    };
                }
                return validation;
            };

            validateField({
                name: "fullname",
                condition: isEmpty(fields.fullname),
                errorMessage: "Full name is required.",
            });
            validateField({
                name: "email",
                condition: !/\S+@\S+\.\S+/.test(fields.email),
                errorMessage: "Valid email address is required.",
            });
            validateField({
                name: "phone",
                condition: !intlTelInputRef.current || !intlTelInputRef.current.isValidNumber(),
                errorMessage: "Valid phone number is required!",
            });

            return validation;
        },
        emailMethod: "api",
        mailerSetting: getMailerSettings({
            fromName: "Sports Dental Studio",
            subject: "New Contact Enquiry from Website",
        }),
    });
    // const onChangeNumber = (number, instance) => {
    //     console.log(instance);
    // }

    return (
        <form
            className="appointment-form contact-form needs-validation"
            onSubmit={handleSubmit}
            ref={formRef}
            noValidate
        >
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="fullname">Full name</label>
                    <input
                        className={classes(
                            "form-control",
                            formValidation.fullname?.isInvalid && "is-invalid"
                        )}
                        id="fullname"
                        type="text"
                        name="fullname"
                        placeholder="Enter your name"
                        required
                        onChange={handleChange}
                        value={formData.fullname}
                    />
                    <div className="invalid-feedback">
                        {formValidation.fullname?.error}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className={classes(
                            "form-control",
                            formValidation.email?.isInvalid && "is-invalid"
                        )}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="name@email.com"
                        required
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <div className="invalid-feedback">{formValidation.email?.error}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <IntlTelInputField
                        id="phone"
                        name="phone"
                        placeholder="Enter a valid number"
                        className={classes(
                            "form-control phone-input",
                            formValidation.phone?.isInvalid && "is-invalid"
                        )}
                        intlTelInputRef={intlTelInputRef}
                        error={formValidation.phone?.error}
                        setFormData={setFormData}
                        setFormValidation={setFormValidation}
                        // onChangeNumber={onChangeNumber}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sport">Sport / team</label>
                    <input
                        className="form-control"
                        id="sport"
                        type="text"
                        name="sport"
                        placeholder="e.g., Boxing Club / Football"
                        onChange={handleChange}
                        value={formData.sport}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Custom mouthguard program, team screening, etc."
                    onChange={handleChange}
                    value={formData.message}
                />
            </div>
            <div className="form-actions">
                <Button
                    textLabel="Send message"
                    customClass="appointment-btn"
                    type="submit"
                />

                <div className="form-meta">
                    <i className="fa-regular fa-clock" aria-hidden />
                    <span>We respond within 24 hours.</span>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
