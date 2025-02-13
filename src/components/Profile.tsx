import Link from 'next/link';

import Image from 'next/image';
import profile from '../../public/images/siyoming.jpg';

export default function Profile() {
  return (
    <section className='text-center mt-2'>
      <Image
        src={profile}
        alt='profile'
        width={250}
        height={250}
        priority
        className='rounded-full mx-auto'
      ></Image>
      <h2 className='text-3xl font-bold mt-2'>이시연</h2>
      <h3 className='text-xl font-semibold'>걸밴드 QWER</h3>
      <p>보컬 / 기타</p>
      <Link href='/contact'>
        <button className='py-1 px-4 mt-2 text-center rounded-xl bg-orange-300'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
