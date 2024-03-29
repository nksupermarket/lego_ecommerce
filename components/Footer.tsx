import React from 'react';
import styles from '../styles/Footer.module.scss';
import LinksCtn from './LinksCtn';
import SocialsCtn from './SocialsCtn';
import ArrowSvg from './svg/ArrowSvg';
import LegoLego from './svg/LegoLogo';
import useEmail from '../utils/hooks/useEmail';
import Accordion from './Accordian';
import InputWrapperWithError from './InputWrapperWithError';
import Device from './Device/index';

const footerLinks = [
  {
    title: 'about us',
    links: [
      { text: 'about the LEGO group' },
      { text: 'LEGO news' },
      { text: 'sustainability' },
      { text: 'supply chain transparency statement' },
      { text: 'LEGO product certification' },
      { text: 'LEGO jobs' },
      { text: 'LEGO compliance line' },
    ],
  },
  {
    title: 'support',
    links: [
      { text: 'contact us' },
      { text: 'find building instructions' },
      { text: 'replacement parts' },
      { text: 'shipping and returns' },
      { text: 'payment methods' },
      { text: 'terms & conditions' },
      { text: 'product recalls' },
    ],
  },
  {
    title: 'attractions',
    links: [
      { text: 'LEGO house' },
      { text: 'LEGOLAND parks' },
      { text: 'LEGOLAND discovery centers' },
    ],
  },
  {
    title: 'more from us',
    links: [
      { text: 'LEGO LIFE' },
      { text: 'LEGO education' },
      { text: 'LEGO ideas' },
      { text: 'LEGO foundation' },
      { text: 'affiliate program' },
      { text: 'student offers' },
      { text: 'LEGO braille bricks' },
    ],
  },
];

const colOneLinks = [
  { text: 'gift cards' },
  { text: 'LEGO catalogs' },
  { text: 'find a LEGO store' },
];

interface Props {
  forwardedRef?: React.RefObject<HTMLElement>;
}

export default function Footer({ forwardedRef }: Props) {
  const { email, inputStatus, submit, handleChange } = useEmail();

  const desktopView = (
    <footer ref={forwardedRef} className={styles.main} role="contentinfo">
      <div className={styles.content}>
        <section className={`${styles.row} two_col_view`}>
          <div className="col_one">
            <LegoLego size="100" />
            <LinksCtn links={colOneLinks} />
          </div>
          <div className="col_two">
            {footerLinks.map((fl, i) => {
              return (
                <LinksCtn
                  key={`${fl.title}-${i}`}
                  title={fl.title}
                  links={fl.links}
                />
              );
            })}
          </div>
        </section>
        <section className={`${styles.row_two} ${styles.row}`}>
          <form className={styles.subscribe_wrapper} onSubmit={submit}>
            <h5>subscribe to LEGO shop emails</h5>
            <div className={styles.subscribe_input}>
              <InputWrapperWithError
                inputDetails={{
                  type: 'text',
                  placeholder: 'your email address',
                  value: email,
                }}
                inputStatus={inputStatus}
                handleChange={handleChange}
              />
              <button>
                <ArrowSvg dir="right" />
              </button>
            </div>
          </form>
          <div className={styles.follow_us}>
            <h5>follow us</h5>
            <SocialsCtn iconSize="20px" />
          </div>
        </section>

        <section className={`${styles.row_three} ${styles.row} small_text`}>
          <p>
            LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older
            to purchase online. LEGO, the LEGO logo, the Minifigure, DUPLO,
            LEGENDS OF CHIMA, NINJAGO, BIONICLE, MINDSTORMS and MIXELS are
            trademarks and copyrights of the LEGO Group. ©2022 The LEGO Group.
            All rights reserved. Use of this site signifies your agreement to
            the terms of use.
          </p>
        </section>
      </div>
    </footer>
  );

  const mobileView = (
    <footer
      ref={forwardedRef}
      className={`${styles.main} mobile`}
      role="contentinfo"
    >
      <div className={styles.content}>
        <section className={`${styles.row}`}>
          <LegoLego size="100" />
          <LinksCtn links={colOneLinks} />
        </section>
        <section className={`${styles.row}`}>
          {footerLinks.map((fl, i) => {
            return (
              <Accordion
                className={styles.accordion}
                key={`${fl.title}-${i}`}
                title={fl.title}
                insides={<LinksCtn links={fl.links} />}
              />
            );
          })}
        </section>

        <section className={`${styles.row}`}>
          <form className={styles.subscribe_wrapper} onSubmit={submit}>
            <h5>subscribe to LEGO shop emails</h5>
            <div className={styles.subscribe_input}>
              <InputWrapperWithError
                inputDetails={{
                  type: 'text',
                  placeholder: 'your email address',
                  value: email,
                }}
                inputStatus={inputStatus}
                handleChange={handleChange}
              />
              <button>
                <ArrowSvg dir="right" />
              </button>
            </div>
          </form>
        </section>
        <section className={styles.row}>
          <div className={styles.follow_us}>
            <h5>follow us</h5>
            <SocialsCtn iconSize="20px" />
          </div>
        </section>

        <section className={`${styles.row_three} ${styles.row} small_text`}>
          <p>
            LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older
            to purchase online. LEGO, the LEGO logo, the Minifigure, DUPLO,
            LEGENDS OF CHIMA, NINJAGO, BIONICLE, MINDSTORMS and MIXELS are
            trademarks and copyrights of the LEGO Group. ©2022 The LEGO Group.
            All rights reserved. Use of this site signifies your agreement to
            the terms of use.
          </p>
        </section>
      </div>
    </footer>
  );

  return (
    <Device>
      {({ isMobile }) =>
        isMobile || window.innerWidth <= 810 ? mobileView : desktopView
      }
    </Device>
  );
}
