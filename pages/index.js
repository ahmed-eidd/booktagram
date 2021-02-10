import react, {useEffect} from 'react'
import Head from 'next/head';
import Nav from '../components/Nav/Nav';
import styles from '../styles/Home.module.css';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import { useDispatch} from 'react-redux'
import { fetchGallery} from '../store/gallery/slice'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGallery())
  }, [])
  const router = useRouter()
  const {locale} = router
  const {formatMessage} = useIntl();
  const f = id => formatMessage({id})
  return (
   <Layout>
     <h1>
       hello world
     </h1>
   </Layout>
  );
}
