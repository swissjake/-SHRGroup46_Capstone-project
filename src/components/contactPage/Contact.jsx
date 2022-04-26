import React from 'react';
import styles from './Contact.module.css';
import {BsCursorFill,BsFillTelephoneFill,BsFillGeoFill} from "react-icons/bs"
const fields = [
	{
		label: 'name',
		type: 'text'
	},
	{
		label: 'email',
		type: 'email'
	},
	{
		label: 'subject',
		type: 'text'
	}
];

const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.writeUs} id="write_us">
				<h2 className={styles.formHeading}>Write us</h2>
				<form className={styles.formContainer} action="#">
					<div className={styles.inputContainer}>
						{fields.map((item, index) => (
							<React.Fragment key={index}>
								<label className={styles.formLabel} htmlFor={item.label}>{item.label}</label>
								<div>
									<input className={styles.input} type="text" />
								</div>
							</React.Fragment>
						))}
            <label className={styles.formLabel} htmlFor="messsage">message</label>
            <textarea className={styles.message}></textarea>
<button className={styles.submit} type='submit'>send message</button>

					</div>
				</form>
			</div>

      <div className={styles.writeUs} id="write_us">
				<h2 className={styles.formHeading}>Contact us</h2>
			<div className={styles.contact}>
        <p className={styles.contactText}>
          we are open to have any suggestion or just to have a chat
        </p>

<div className={styles.addressContainer}>
<BsFillGeoFill style={{color:"#F1E8D7",fontSize:"1.5rem"}}/> 
<div style={{width:"90%"}}>
<span className={styles.addressLabel}>address:</span> <span className={styles.address}>6 liverpool road. lagos, nigeria.</span>

</div>
</div>

<div className={styles.addressContainer}>
  <BsFillTelephoneFill style={{color:"#F1E8D7",fontSize:"1.5rem"}}/>

  <div style={{width:"90%"}}>
  <span className={styles.addressLabel}>phone:</span> <span className={styles.address}>liverpool road. lagos, nigeria.</span>
  </div>

</div>

<div className={styles.addressContainer}>
<BsCursorFill style={{color:"#F1E8D7",fontSize:"1.5rem"}}/>
<div style={{width:"90%"}}>
<span className={styles.addressLabel}>email:</span> <span className={styles.address}>restaurant@email.com</span>

</div>
</div>



      </div>
			</div>
		</div>
	);
};

export default Contact;

// Green: #3E4F3C
// Brown: #F1E8D7
// White: #FFFFFF
