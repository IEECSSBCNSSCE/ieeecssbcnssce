import React from 'react';



const JoinForm = () => {
    // Replace with your actual Formspree endpoint or other handling mechanism
    const FORM_ENDPOINT = "REPLACE_WITH_MAINTAINERS_FORMSPREE_ENDPOINT";

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', fontFamily: 'sans-serif' }}>
            <h1>Join Our Community</h1>
            <p>Fill out the form below to apply for membership in the IEECSSB CNSSCE club.</p>

            <form action={FORM_ENDPOINT} method="POST">
                {/* Name */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name:</label>
                    <input type="text" id="name" name="name" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
                </div>

                {/* Semester */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="semester" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Semester:</label>
                    <select id="semester" name="semester" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}>
                        <option value="">--Select Semester--</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                        <option value="S4">S4</option>
                        <option value="S5">S5</option>
                        <option value="S6">S6</option>
                        <option value="S7">S7</option>
                        <option value="S8">S8</option>
                    </select>
                </div>

                {/* Department */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="department" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Department:</label>
                    <input type="text" id="department" name="department" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
                </div>

                {/* College */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="college" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>College Name:</label>
                    <input type="text" id="college" name="college" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
                </div>

                {/* Gender */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="gender" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Gender:</label>
                    <select id="gender" name="gender" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}>
                        <option value="">--Select Gender--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </div>

                {/* Contact Info */}
                 <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address:</label>
                    <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
                </div>
                 <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="contact" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Contact Number:</label>
                    <input type="tel" id="contact" name="contact" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
                </div>


                {/* LinkedIn */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="linkedin" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>LinkedIn Profile URL (Optional):</label>
                    <input type="text" id="linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/yourprofile" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
                </div>

                {/* GitHub */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="github" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>GitHub Profile URL (Optional):</label>
                    <input type="text" id="github" name="github" placeholder="https://github.com/yourusername" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
                </div>

                {/* Reason for Joining */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="reason" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Why would you like to join our team?</label>
                    <textarea id="reason" name="reason" rows="4" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
                </div>

                {/* Suggestions */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="suggestions" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Suggestions for new ideas (Optional):</label>
                    <textarea id="suggestions" name="suggestions" rows="4" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" style={{ display: 'block', width: '100%', padding: '12px 20px', marginTop: '25px', backgroundColor: '#007bff', color: 'white', fontSize: '16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JoinForm;