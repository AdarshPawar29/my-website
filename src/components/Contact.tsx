import { Button, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRef } from "react";
import Map from "./Map";
import emailjs from "@emailjs/browser";
import MessageHub from "./Notification/MessageHub";

type AddFunction = (msg: string) => void;
type Props = {};

const Contact = (props: Props) => {
  const form: any = useRef();
  const ref = useRef<null | AddFunction>(null);

  const handleClick = () => {
    if (
      form.current.from_name.value !== "" &&
      form.current.email.value !== "" &&
      form.current.message.value !== ""
    ) {
      ref.current?.("Your mail is sent successfully!");
    } else ref.current?.("Fill the form plz!");
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      form.current.from_name.value !== "" &&
      form.current.email.value !== "" &&
      form.current.message.value !== ""
    ) {
      emailjs
        .sendForm(
          "service_yk3c0fo",
          "template_h81h6k6",
          form.current,
          "6c6Fv323BiafbdD5k"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#0ffdd8",
        dark: "antiquewhite",
      },
    },
  });
  return (
    <>
      <div className="contact">
        <div className="contact-form">
          <div className="html">{"<html>"}</div>
          <div className="body">{"<body>"}</div>
          <div>
            <div className="h2">{"<h2>"}</div>
            <div className="contact-me">
              <h2>Contact Me</h2>
            </div>
            <div className="h2">{"</h2>"}</div>
          </div>
          <div className="my-info-para">
            <div className="p">{"<p>"}</div>
            <div className="contact-me-info">
              <p>
                I’m interested in development opportunities – especially
                ambitious or large projects. However, if you have other request
                or question, don’t hesitate to use the form.
              </p>
            </div>
            <div className="p">{"</p>"}</div>
          </div>
          <div className="form">{"<form>"}</div>
          <div className="form-fields">
            <ThemeProvider theme={theme}>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-fields-inputs">
                  <div className="form-fields-inputs-name-email">
                    <TextField
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      color="primary"
                      name="from_name"
                      fullWidth
                    />
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      color="primary"
                      name="email"
                      fullWidth
                    />
                  </div>
                  <TextField
                    id="standard-basic"
                    label="Subject"
                    variant="standard"
                    color="primary"
                    name="subject"
                    fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Message"
                    multiline
                    rows={4}
                    variant="standard"
                    name="message"
                    fullWidth
                    color="primary"
                  />
                  <div className="submit-btn">
                    <Button
                      variant="outlined"
                      color="primary"
                      type="submit"
                      onClick={handleClick}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </ThemeProvider>
          </div>
          <div className="form">{"</form>"}</div>
          <div className="body">{"</body>"}</div>
          <div className="html">{"</html>"}</div>
        </div>
        {/* <div className="contact-map">
        <Map />
      </div> */}
      </div>
      <MessageHub
        children={(add: AddFunction) => {
          ref.current = add;
        }}
      />
    </>
  );
};

export default Contact;
