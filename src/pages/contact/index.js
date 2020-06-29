import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
    this.state = {
      kidsName: "",
      kidsAddress: "",
      kidsDOB: "",
      mothersName: "",
      isMotherSameAddress: true,
      mothersDifferentAddress: "",
      mothersCell: "",
      mothersHome: "",
      mothersWork: "",
      fathersName: "",
      isFatherSameAddress: true,
      fathersDifferentAddress: "",
      fathersCell: "",
      fathersHome: "",
      fathersWork: "",
      contact1: "",
      contact1Phone: "",
      contact2: "",
      contact2Phone: "",
      isCovered: 0,
      isNotCovered: 0,
      mondayStart: "",
      mondayEnd: "",
      tuesdayStart: "",
      tuesdayEnd: "",
      wednesdayStart: "",
      wednesdayEnd: "",
      thursdayStart: "",
      thursdayEnd: "",
      fridayStart: "",
      fridayEnd: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.mondayEnd, this.state.mondayStart)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };
  

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Application</h1>
              <form
                name="Application"
                method="post"
                action="/application/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="application" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field kidsName">
                  <label className="label" htmlFor={"kidsData"}>
                    Name of child
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"kidsName"}
                      onChange={this.handleChange}
                      id={"kidsName"}
                      required={true}
                    />
                  </div>
                </div>
                <div id="kidsData" className="field kidsData">
                  <label className="label" htmlFor={"kidsData"}>
                    DOB
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"date"}
                      name={"kidsDOB"}
                      onChange={this.handleChange}
                      id={"kidsDOB"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field address">
                  <label className="label" htmlFor={"kidsData"}>
                    Address
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      name={"kidsAddress"}
                      type={"address"}
                      onChange={this.handleChange}
                      id={"kidsAddress"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field mothersName">
                  <label className="label" htmlFor={"mothersData"}>
                    Mothers Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"mothersName"}
                      onChange={this.handleChange}
                      id={"mothersName"}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field mothersData">
                  <label className="label" htmlFor={"mothersData"}>
                    Same Address
                  </label>
                  <div className="control isSameAddress">
                    <input
                      className="checkbox"
                      type={"checkbox"}
                      name={"isMotherSameAddress"}
                      onChange={this.handleChange}
                      id={"isMotherSameAddress"}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field mothersAddress">
                  <label className="label" htmlFor={"mothersAddress"}>
                    Different Address
                  </label>
                  <div className="control mothersAddress">
                    <input
                      className="textarea"
                      type={"textarea"}
                      name={"mothersDifferentAddress"}
                      onChange={this.handleChange}
                      id={"mothersDifferentAddress"}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={"mothersData"}>
                    Home Phone
                  </label>
                  <div className="control">
                    <input
                      className="phone"
                      type={"phone"}
                      name={"mothersHome"}
                      onChange={this.handleChange}
                      id={"mothersHome"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"mothersData"}>
                    Work Phone
                  </label>
                  <div className="control">
                    <input
                      className="phone"
                      type={"phone"}
                      name={"mothersWork"}
                      onChange={this.handleChange}
                      id={"mothersWork"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"mothersData"}>
                    Cell Phone
                  </label>
                  <div className="control">
                    <input
                      className="phone"
                      type={"phone"}
                      name={"mothersCell"}
                      onChange={this.handleChange}
                      id={"mothersCell"}
                      required={true}
                    />
                  </div>
                </div>



                <div className="field fathersName">
                  <label className="label" htmlFor={"fathersData"}>
                    Fathers Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"fathersName"}
                      onChange={this.handleChange}
                      id={"fathersName"}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={"fathersData"}>
                    Same Address
                  </label>
                  <div className="control">
                    <input
                      className="checkbox"
                      type={"checkbox"}
                      name={"isFatherSameAddress"}
                      onChange={this.handleChange}
                      id={"isFatherSameAddress"}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={"fathersData"}>
                    Different Address
                  </label>
                  <div className="control">
                    <input
                      className="textarea"
                      type={"textarea"}
                      name={"fathersDifferentAddress"}
                      onChange={this.handleChange}
                      id={"fathersDifferentAddress"}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={"fathersData"}>
                    Home Phone
                  </label>
                  <div className="control">
                    <input
                      className="phone"
                      type={"phone"}
                      name={"fathersHome"}
                      onChange={this.handleChange}
                      id={"fathersHome"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"fathersData"}>
                    Work Phone
                  </label>
                  <div className="control">
                    <input
                      className="phone"
                      type={"phone"}
                      name={"fathersWork"}
                      onChange={this.handleChange}
                      id={"fathersWork"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"fathersData"}>
                    Cell Phone
                  </label>
                  <div className="control">
                    <input
                      className="phone"
                      type={"phone"}
                      name={"fathersCell"}
                      onChange={this.handleChange}
                      id={"fathersCell"}
                      required={true}
                    />
                  </div>
                </div>

                <h2>Emergency Contacts</h2>

                <div className="field">
                  <label className="label" htmlFor={"emergencyContacts"}>
                    Contacts Name
                  </label>
                  <div className="control">
                    <input
                    className="input"
                    type={"text"}
                    name={"contact1"}
                    onChange={this.handleChange}
                    id={"contact1"}
                    required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={"emergencyContacts"}>
                    Phone Number
                  </label>
                  <div className="control">
                    <input
                      className="phone"
                      type={"phone"}
                      name={"contact1Phone"}
                      onChange={this.handleChange}
                      id={"contact1Phone"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field contact2Name">
                  <label className="label" htmlFor={"emergencyContacts"}>
                    Contacts Name
                  </label>
                  <div className="control">
                    <input
                    className="input"
                    type={"text"}
                    name={"contact2"}
                    onChange={this.handleChange}
                    id={"contact2"}
                    required={true}
                    />
                  </div>
                </div>

                <div className="field contact2Phone">
                  <label className="label" htmlFor={"emergencyContacts"}>
                    Phone Number
                  </label>
                  <div className="control">
                    <input
                      className="phone"
                      type={"phone"}
                      name={"contact2Phone"}
                      onChange={this.handleChange}
                      id={"contact2Phone"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"emergencyContacts"}>
                    Do you have a backup care provider?
                  </label>
                  <div className="control">
                    <label className="label">Yes</label>
                    <input
                      className="checkbox"
                      type={"checkbox"}
                      name={"isCovered"}
                      onChange={this.handleChange}
                      id={"isCovered"}
                      required={false}
                    />
                    <label className="label">No</label>
                    <input
                    className="checkbox"
                    type={"checkbox"}
                    name={"isNotCovered"}
                    onChange={this.handleChange}
                    id={"isNotCovered"}
                    required={false}
                    />
                  </div>
                </div>

                <h2>Service Information</h2>

                <div className="field">
                  <label className="label" htmlFor={"serviceInfo"}>
                    Beginning date needing care
                  </label>
                  <div className="control">
                    <input
                      className="date"
                      type={"date"}
                      name={"beginningDate"}
                      onChange={this.handleChange}
                      id={"beginningDate"}
                      required={true}
                    />
                  </div>
                </div>
                <h3>Hours</h3>
                <div className="field">
                  <label className="label" htmlFor={"serviceInfo"}>
                    Monday
                  </label>
                  <div className="control">
                    <input
                      className="monday"
                      type={"time"}
                      name={"mondayStart"}
                      onChange={this.handleChange}
                      id={"mondayStart"}
                      required={false}
                    />
                    <p>to:</p>
                    <input
                      className="monday"
                      type={"time"}
                      name={"mondayEnd"}
                      onChange={this.handleChange}
                      id={"mondayEnd"}
                      required={false}
                    />
                  </div>
                  <label className="label" htmlFor={"serviceInfo"}>
                    Tuesday
                  </label>
                  <div className="control">
                    <input
                      className="tuesday"
                      type={"time"}
                      name={"tuesdayStart"}
                      onChange={this.handleChange}
                      id={"tuesdayStart"}
                      required={false}
                    />
                    <p>to:</p>
                    <input
                      className="tuesday"
                      type={"time"}
                      name={"tuesdayEnd"}
                      onChange={this.handleChange}
                      id={"tuesdayEnd"}
                      required={false}
                    />
                  </div>
                  <label className="label" htmlFor={"serviceInfo"}>
                    Wednesday
                  </label>
                  <div className="control">
                    <input
                      className="Wednesday"
                      type={"time"}
                      name={"wednesdayStart"}
                      onChange={this.handleChange}
                      id={"wednesdayStart"}
                      required={false}
                    />
                    <p>to:</p>
                    <input
                      className="monday"
                      type={"time"}
                      name={"wednesdayEnd"}
                      onChange={this.handleChange}
                      id={"wednesdayEnd"}
                      required={false}
                    />
                  </div>
                  <label className="label" htmlFor={"serviceInfo"}>
                    Thursday
                  </label>
                  <div className="control">
                    <input
                      className="thursday"
                      type={"time"}
                      name={"thursdayStart"}
                      onChange={this.handleChange}
                      id={"thursdayStart"}
                      required={false}
                    />
                    <p>to:</p>
                    <input
                      className="thursday"
                      type={"time"}
                      name={"thursdayEnd"}
                      onChange={this.handleChange}
                      id={"thursdayEnd"}
                      required={false}
                    />
                  </div>
                  <label className="label" htmlFor={"serviceInfo"}>
                    Friday
                  </label>
                  <div className="control">
                    <input
                      className="friday"
                      type={"time"}
                      name={"fridayStart"}
                      onChange={this.handleChange}
                      id={"fridayStart"}
                      required={false}
                    />
                    <p>to:</p>
                    <input
                      className="friday"
                      type={"time"}
                      name={"fridayEnd"}
                      onChange={this.handleChange}
                      id={"fridayEnd"}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={"serviceInfo"}>
                    Typical drop-off time
                  </label>
                  <div className="control">
                    <input
                      className="time"
                      type={"time"}
                      name={"dropOffTime"}
                      onChange={this.handleChange}
                      id={"dropOffTime"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"serviceInfo"}>
                    Typical pick-up time
                  </label>
                  <div className="control">
                    <input
                      className="time"
                      type={"time"}
                      name={"pickUpTime"}
                      onChange={this.handleChange}
                      id={"pickUpTime"}
                      required={true}
                    />
                  </div>
                </div>
                

                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>


              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
