import Button from '../Button/Button'
import customercare from '../../pics/customercare.png'
import nocall from '../../pics/no-phone.png'
import manager from '../../pics/manager.png'
import handshake from '../../pics/handshake.png'
import './Features.css'
const features = [
  {
    name: '24/7 Support',
    description:
      "Experience unparalleled excellence with our top-tier support – we're here to ensure your healthy lifestyle!",
    icon: customercare,
  },
  {
    name: 'Doctor Ai',
    description:
    "Doctor AI is a cutting-edge chatbot designed to provide medical consultations, offering accurate diagnoses and personalized treatment plans just like a real doctor",
    icon: manager,
  },
  {
    name: 'Instant Appointments',
    description:
      "Instant Appointment Booking allows patients to effortlessly schedule consultations with their doctor in just a few clicks.",
    icon: handshake,
  },
  {
    name: 'No Unwanted Calls',
    description:
      "Experience peace of mind with our commitment to no unwanted calls – we respect your time and privacy!",
    icon: nocall,
  },
]

export default function Features() {
  return (
    <div className="bg-slate-200 py-14 sm:py-16">
      <div className=" feature-parent-div flex justify-around max-w-7xl px-6 lg:px-8">
        <div className=" feature-title max-w-sm flex flex-col items-center lg:text-start">
          
          <div className=" feature-title-text mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">
            What makes us different from others?
          </div>
          <div className='feature-title-btn max-w-3xl mt-14 '>
          <Button/>
          </div>
          
          
        </div>
        <div className=" mt-10 max-w-lg sm:mt-20 lg:mt-4 lg:max-w-2xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <img src={feature.icon}/>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
