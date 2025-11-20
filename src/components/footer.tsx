'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import LogoImage from '@/assets/images/logo.png'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const footerLinks = useMemo(
    () => [
      {
        title: t('footer.mainframe'),
        links: [
          { label: t('footer.integrations') },
          { label: t('footer.roadmap') },
          { label: t('footer.ourStory') },
        ],
      },
      {
        title: t('footer.connect'),
        links: [
          { label: t('footer.facebook') },
          { label: t('footer.x') },
          { label: t('footer.medium') },
        ],
      },
      {
        title: t('footer.ourMission'),
        links: [{ label: t('footer.packages') }, { label: t('footer.support') }],
      },
      {
        title: t('footer.resources'),
        links: [{ label: t('footer.dataProtection') }, { label: t('footer.serviceTerms') }],
      },
    ],
    [t],
  )

  return (
    <footer className='relative z-10 rounded-t-4xl bg-[#101220] py-[120px]'>
      <div className='container flex'>
        <div className='space-y-20'>
          <div className='flex items-center gap-3'>
            <Image src={LogoImage} alt='Nerd Signals Logo' className='h-[45px] w-fit' />
            <p className='text-[32px]/8 font-bold text-[#E8EAF6]'>
              Nerd<span className='font-thin'>Signals</span>
            </p>
          </div>

          <p className='text-sm text-[#6F7294]'>{t('footer.copyright')}</p>
        </div>

        <div className='ml-auto flex gap-[30px]'>
          {footerLinks.map((links) => (
            <div className='space-y-3' key={links.title}>
              <h5 className='font-instrument-sans text-lg font-semibold text-[#363E6F]'>
                {links.title}
              </h5>

              <ul className='space-y-2'>
                {links.links.map((link) => (
                  <li className='text-lg' key={link.label}>
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
