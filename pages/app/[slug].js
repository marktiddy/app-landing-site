import styles from '../../styles/Home.module.scss';
import { useRouter } from 'next/router';
import { appData } from '../../data.js';
import Layout from '../../components/layout';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const appToShow = appData.filter((f) => {
    return f.slug == slug;
  });

  if (!appToShow[0]) {
    return <h2>Loading...</h2>;
  }

  const { name, desc, apple, android, image, policy, alexa } = appToShow[0];

  return (
    <Layout>
      <Link href="/">
        <a className={styles.backhome}>Home</a>
      </Link>
      <h1 className={styles.title}>{name}</h1>
      <p>{desc}</p>
      <div className={styles.privacyContainer}>
        <div className={styles.privacyLeft}>
          <img
            src={image}
            alt={`Screenshot of ${name}`}
            style={styles.appImage}
          />
          <div className={styles.badges}>
            {apple ? (
              <div>
                <a href={apple}>
                  <img
                    src="/images/appstorebadge.png"
                    alt="Apple App Store Link"
                    style={styles.downloadbadge}
                  />
                </a>
              </div>
            ) : (
              ''
            )}
            {android ? (
              <div>
                {' '}
                <a href={android}>
                  <img
                    src="/images/playbadge.png"
                    alt="Google Play Store Link"
                    style={styles.downloadbadge}
                  />
                </a>
              </div>
            ) : (
              ''
            )}
            {alexa ? (
              <div>
                {' '}
                <a href={alexa}>
                  <img
                    src="/images/skilllogo.png"
                    alt="Alexa Skill Link"
                    style={styles.downloadbadge}
                  />
                </a>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className={styles.privacyRight}>
          <h2>Privacy Policy</h2>
          <div
            dangerouslySetInnerHTML={{ __html: policy }}
            className={styles.policyArea}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
