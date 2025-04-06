import PatientForm from '@/components/forms/PatientForm'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <div className='flex justify-center'>
            <div className='bg-white w-2/3 mb-12 pl-2 flex items-center justify-center rounded-full'>
              <Image
                src='/assets/docmatchlogo-full.png'
                height={1000}
                width={1000}
                alt='patient'
                className='h-20 w-fit'
              />
            </div>
          </div>
          <PatientForm />
          <div className='text-14-regular mt-20 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © 2025 Copyright - Doctor Match
            </p>
            <Link href='/?admin=true' className='text-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src='/assets/images/onboarding-img2.webp'
        height={1000}
        width={1000}
        alt='patient'
        className='side-img max-w-[50%]'
      ></Image>
    </div>
  )
}
