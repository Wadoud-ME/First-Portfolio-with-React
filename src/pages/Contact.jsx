import ContactDetails from "../components/CONTACT/ContactDetails"
import ContactForm from "../components/CONTACT/ContactForm"

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-15 lg:gap-10 w-full mx-auto px-4 py-6 sm:py-8 md:py-10 sm:max-w-[610px] md:max-w-[740px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1300px]">
        <ContactForm />
        <ContactDetails />
      </div>
    </>
  )
}

export default Contact
