import Link from 'next/link';

import Image from 'next/image';
import profile from '../../public/images/siyoming.jpg';

export default function Profile() {
  return (
    <div className='absolute left-1/2 right-1/2 bg-orange-500 w-80 h-96 flex flex-col items-center'>
      <Image
        src={profile}
        alt='profile'
        width={256}
        height={256}
        className='rounded-full bg-blue-600 w-64 h-64'
      ></Image>
      <h1>이시연</h1>
      <p>걸밴드 QWER</p>
      <p>보컬 / 기타</p>
      <Link
        href='/contact'
        className='w-28 p-1 text-center rounded-md bg-orange-300'
      >
        Contact Me
      </Link>
    </div>
  );
}
