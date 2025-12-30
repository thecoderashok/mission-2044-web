import React, { useRef } from "react";
import { useFormSubmit } from "../../hook/useFormSubmit";
import { getMailerSettings } from "../../mailerSettings";
import IntlTelInputField from "../Forms/IntlTelInputField";
import Button from "../Button/Button";
import { useClassNames } from "../../hook/useClassNames";

const BookAppointmentForm = () => {
    const classes = useClassNames();
    const formRef = useRef(null);

    const {
        formData,
        handleChange,
        handleSubmit,
        intlTelInputRef,
        formValidation,
        setFormData,
        setFormValidation,
    } = useFormSubmit({
        initialData: {
            fullname: "",
            email: "",
            phone: "",
            sport: "",
            message: "",
        },

        handleValidation: (fields, intlTelInputRef) => {
            const validation = {};
            const isEmpty = (v) => !v || !String(v).trim();

            const validate = ({ name, condition, error }) => {
                if (condition) {
                    validation[name] = {
                        isInvalid: true,
                        error,
                    };
                }
            };

            validate({
                name: "fullname",
                condition: isEmpty(fields.fullname),
                error: "Full name is required.",
            });

            validate({
                name: "email",
                condition: !/\S+@\S+\.\S+/.test(fields.email),
                error: "Valid email address is required.",
            });

            validate({
                name: "phone",
                condition:
                    !intlTelInputRef.current ||
                    !intlTelInputRef.current.isValidNumber(),
                error: "Valid phone number is required.",
            });

            validate({
                name: "sport",
                condition: isEmpty(fields.sport),
                error: "Please mention your sport.",
            });

            return validation;
        },

        emailMethod: "api",
        mailerSetting: getMailerSettings({
            subject: "New Book Appointment Request",
            fromName: "Book Appointment Form",
        }),
    });

    return (
        <form
            ref={formRef}
            className="book-appointment-form needs-validation"
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="row g-3">
                <div className="col-12">
                    <label className="form-label">Full Name*</label>
                    <input
                        type="text"
                        name="fullname"
                        className={classes(
                            "form-control",
                            formValidation.fullname?.isInvalid && "is-invalid"
                        )}
                        placeholder="Enter your full name"
                        value={formData.fullname}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.fullname?.error}
                    </div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email*</label>
                    <input
                        type="email"
                        name="email"
                        className={classes(
                            "form-control",
                            formValidation.email?.isInvalid && "is-invalid"
                        )}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.email?.error}
                    </div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Phone Number*</label>
                    <IntlTelInputField
                        name="phone"
                        placeholder="Enter a valid number"
                        className={classes(
                            "form-control phone-input",
                            formValidation.phone?.isInvalid && "is-invalid"
                        )}
                        intlTelInputRef={intlTelInputRef}
                        setFormData={setFormData}
                        setFormValidation={setFormValidation}
                        error={formValidation.phone?.error}
                        required
                    />
                </div>

                <div className="col-12">
                    <label className="form-label">Sport*</label>
                    <input
                        type="text"
                        name="sport"
                        className={classes(
                            "form-control",
                            formValidation.sport?.isInvalid && "is-invalid"
                        )}
                        placeholder="e.g., Boxing, Football, Gym Training"
                        value={formData.sport}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.sport?.error}
                    </div>
                </div>

                <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                        name="message"
                        className="form-control"
                        rows="3"
                        placeholder="Tell us about your requirement"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12">
                    <div className="button-wrapper justify-content-center">
                        <Button
                            textLabel="Book Appointment"
                            type="submit"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BookAppointmentForm;
