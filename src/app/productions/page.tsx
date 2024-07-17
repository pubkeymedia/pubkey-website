"use client";

import React, { useEffect } from 'react';

const SignupPage: React.FC = () => {
  useEffect(() => {
    // Set the background color directly in the useEffect to prevent initial white background
    document.documentElement.style.backgroundColor = '#000';
    document.body.style.backgroundColor = '#000';

    // Load jQuery first
    const scriptJQuery = document.createElement('script');
    scriptJQuery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    scriptJQuery.type = 'text/javascript';
    scriptJQuery.async = true;
    scriptJQuery.onload = () => {
      // Load Mailchimp script after jQuery has loaded
      const script1 = document.createElement('script');
      script1.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
      script1.type = 'text/javascript';
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.innerHTML = `
        (function($) {
          window.fnames = new Array(); 
          window.ftypes = new Array();
          fnames[0] = 'EMAIL';
          ftypes[0] = 'email';
          fnames[1] = 'FNAME';
          ftypes[1] = 'text';
          fnames[2] = 'LNAME';
          ftypes[2] = 'text';
          fnames[4] = 'PHONE';
          ftypes[4] = 'phone';
          fnames[3] = 'ADDRESS';
          ftypes[3] = 'address';
          fnames[5] = 'BIRTHDAY';
          ftypes[5] = 'birthday';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `;
      document.body.appendChild(script2);
    };
    document.body.appendChild(scriptJQuery);
  }, []);

  return (
    <>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          background-color: #000; /* Fallback in case the inline styles are overridden */
        }
      `}</style>
      <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', minWidth: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <img src="/images/productions/pubkey_shrine.gif" alt="Header Image" style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }} />
        <div style={{ marginBottom: '20px' }}>
          <a href="mailto:events@port8333.io" style={{ color: 'orange', fontSize: '20px', fontWeight: 'bold' }}>events@port8333.io</a>
        </div>
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style type="text/css">
            {`
              #mc_embed_signup .button { 
                  background-color: orange !important;
              }

              #mc_embed_signup {
                background: #000;
                clear: left;
                font: 14px Helvetica, Arial, sans-serif;
                width: 400px;
                color: #fff;
              }
              .referral_badge {
                width: 150px !important;
                height: auto !important;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}
          </style>
          <div id="mc_embed_signup" dangerouslySetInnerHTML={{ __html: `
            <form action="https://bar.us13.list-manage.com/subscribe/post?u=728101f5203de998be2c2320f&amp;id=1102fae9d9&amp;f_id=00d9dce2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe for Updates</h2>
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                  <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required />
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">First Name</label>
                  <input type="text" name="FNAME" class="text" id="mce-FNAME" />
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME">Last Name</label>
                  <input type="text" name="LNAME" class="text" id="mce-LNAME" />
                </div>
                <div class="mc-field-group">
                  <label for="mce-PHONE">Phone Number</label>
                  <input type="text" name="PHONE" class="REQ_CSS" id="mce-PHONE" />
                </div>
                <div id="mce-responses" class="clear foot">
                  <div class="response" id="mce-error-response" style="display: none;"></div>
                  <div class="response" id="mce-success-response" style="display: none;"></div>
                </div>
                <div aria-hidden="true" style="position: absolute; left: -5000px;">
                  <input type="text" name="b_728101f5203de998be2c2320f_1102fae9d9" tabIndex={-1} value="" />
                </div>
                <div class="optionalParent">
                  <div class="clear foot">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" />
                    <p style="margin: 0px auto;">
                      <a href="http://eepurl.com/iTXqAA" title="Mailchimp - email marketing made easy and fun">
                        <span style="display: inline-block; background-color: transparent; border-radius: 4px;">
                          <img class="referral_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          ` }} />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
