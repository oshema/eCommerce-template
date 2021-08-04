import React from 'react';
import './footer.css';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {

    // Material UI Styling //
    const useStyles = makeStyles({
        socialIcons: {
            fontSize: "30px"
        }
    })

    const classes = useStyles();
    // Material UI Styling //


    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div>
                    <div className="footer__title">The little Latters</div>
                    <div>Return policy</div>
                    <div>Privacy policy</div>
                    <div>Terms</div>
                </div>
                <div>
                    <div className="footer__title">Information</div>
                    <div>Boards</div>
                    <div>{`shipping & returns policy`}</div>
                    <div>Contact us</div>
                    <div>FAQ</div>
                </div>
                <div>
                    <div className="footer__title"> Be our friends</div>
                    <div className="footer__socialIcons">
                        <InstagramIcon className={classes.socialIcons} />
                        <TwitterIcon className={classes.socialIcons} />
                        <YouTubeIcon className={classes.socialIcons} />
                        <FacebookIcon className={classes.socialIcons} />
                    </div>
                </div>
            </div>
            <div className="footer__copyRights">'Your Company Name 2021 ©</div>
        </div>
    )
}

export default Footer
