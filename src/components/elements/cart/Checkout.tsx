import { Link, Common as Button } from '@Bits/Button'
import Section from '@Blocks/Section'
import { Common as Checkbox } from '@Bits/Checkbox'
import { Label } from '@radix-ui/react-label'
import cntl from 'cntl'
import { TextArea, Input } from './Checkout/Form'
import { cartItems } from '@Dev/dummy'
import { Common as Icon } from '@Bits/Icon'

export default function Checkout() {
  return (
    <Section.Container>
      <Section.Title>Checkout</Section.Title>
      <Section.Content className="lg:mt-12">
        <form
          id="checkout-form"
          className="flex flex-col sm:grid grid-cols-2 lg:gap-x-10 gap-x-5 gap-y-5 sm:gap-y-10"
        >
          <div className="flex flex-col gap-y-5">
            <h2 className="font-heading text-lg">Payment Method</h2>
            <Input label="Credit Card" name="credit-card" />
            <Input
              label="Card Number"
              name="cc-number"
              leadingIcon="credit_card"
            />
            <div className="flex flex-col xs:flex-row sm:flex-col lg:flex-row gap-y-5 gap-x-5 sm:gap-x-2 md:gap-x-10">
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 uppercase text-xs tracking-widest text-white/80">
                  Expiration Date
                </legend>
                <div className="flex flex-row gap-5 sm:gap-x-2 md:gap-x-5">
                  <Input name="month" placeholder="Month" />
                  <Input name="year" placeholder="Year" />
                </div>
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 uppercase text-xs tracking-widest text-white/80">
                  Security Code
                </legend>
                <Input name="security-code" placeholder="Three digits" />
              </fieldset>
            </div>
            <Input label="Visa" name="visa" />
          </div>
          <div className="grid grid-cols-2 gap-x-5 sm:gap-x-2 md:gap-x-5 gap-y-5">
            <h2 className="font-heading text-lg col-span-2">Billing Details</h2>
            <Input label="First Name" leadingIcon="person" />
            <Input label="Last Name" />
            <Input
              styleOverrides={{ container: cntl`col-span-2` }}
              label="Email Address"
              leadingIcon="email"
            />
            <Input
              styleOverrides={{ container: cntl`col-span-2` }}
              label="Street Address"
              leadingIcon="home"
            />
            <Input
              styleOverrides={{ container: cntl`col-span-2` }}
              label="Country/Region"
              leadingIcon="flag"
            />
          </div>

          <div
            id="cart-summary"
            className="bg-zinc-900 rounded-lg p-10 w-full col-span-2 mt-10 mb-5 flex flex-col gap-8"
          >
            <h2 className="font-heading text-lg sm:text-2xl">
              <Icon icon="shopping_cart" className="flex gap-3">
                Cart Summary
              </Icon>
            </h2>
            <ul>
              {cartItems.map((item, key) => (
                <li
                  key={(item.product?.name ?? '') + key}
                  className="flex flex-col sm:flex-row sm:justify-between gap-x-5 gap-y-2 py-5 border-b-2 border-white/10"
                >
                  <div className="product">
                    {item.quantity ?? 1} x {item.product?.name}
                  </div>
                  <div className="price tracking-wider self-end">
                    ${item.price}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-row justify-between font-heading font-bold">
              <div className="">Total</div>
              <div>$295.50</div>
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-5">
            <div className="agreement flex flex-row gap-5">
              <Checkbox
                name="agree"
                id="agree"
                className="border-white/30 hover:border-red-600 transition-colors ring-offset-2 ring-offset-black"
                styleOverrides={{
                  indicator: cntl`bg-red-600 border-red-600 ring-offset-2 ring-offset-black`,
                }}
              />
              <Label htmlFor="agree">
                I agree to the{' '}
                <Link className="tracking-normal after:w-0">
                  Terms and Conditions
                </Link>
              </Label>
            </div>
            <Button
              type="submit"
              className="w-32"
              mods={['fill-red', 'to-outline-red', 'hover-darker-fill']}
            >
              Pay
            </Button>
          </div>
        </form>
      </Section.Content>
    </Section.Container>
  )
}
