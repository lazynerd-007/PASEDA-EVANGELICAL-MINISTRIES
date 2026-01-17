import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import FadeIn from "@/components/animations/FadeIn";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  title: z.string().min(2, {
    message: "Title is required.",
  }),
  organizationName: z.string().min(2, {
    message: "Organization name is required.",
  }),
  dates: z.string().min(1, {
    message: "Dates are required.",
  }),
  location: z.string().min(2, {
    message: "Location is required.",
  }),
  bookingType: z.string({
    required_error: "Please select a booking type.",
  }),
  participants: z.string().min(1, {
    message: "Expected number of participants is required.",
  }),
  allowOffering: z.boolean().default(false).optional(),
});

export default function BookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      title: "",
      organizationName: "",
      dates: "",
      location: "",
      participants: "",
      allowOffering: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("EmailJS configuration is missing. Please check your .env file.");
        console.error("Missing EmailJS env vars");
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          fullName: values.fullName,
          email: values.email,
          title: values.title,
          organizationName: values.organizationName,
          dates: values.dates,
          location: values.location,
          bookingType: values.bookingType,
          participants: values.participants,
          allowOffering: values.allowOffering ? "Yes" : "No",
        },
        publicKey
      );

      toast.success("Booking request sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send booking request. Please try again.");
    }
  }

  return (
    <section className="bg-white pb-24">
      <div className="container mx-auto max-w-4xl px-4">
        <FadeIn className="mb-12 border-b pb-4">
          <h2 className="text-center text-4xl font-bold text-neutral-900">
            Booking Form
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-neutral-900">
                      Full Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-neutral-200 bg-neutral-50 p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-neutral-900">
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="border-neutral-200 bg-neutral-50 p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-neutral-900">
                      Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormDescription>
                      Examples: Senior Pastor, Event Coordinator, Conference Host.
                    </FormDescription>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-neutral-200 bg-neutral-50 p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-neutral-900">
                      What is the name of the church/ministry hosting the event?{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-neutral-200 bg-neutral-50 p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-neutral-900">
                      What are the dates you want Preacher Jay to minister?{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-neutral-200 bg-neutral-50 p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-neutral-900">
                      Country and City <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-neutral-200 bg-neutral-50 p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bookingType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-neutral-900">
                      Booking Type? <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-neutral-200 bg-neutral-50 py-6">
                          <SelectValue placeholder="Select booking type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="church">
                          Guest speaker for church
                        </SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="crusade">Crusade</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="participants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-neutral-900">
                      What is your expected number of participants?{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="border-neutral-200 bg-neutral-50 p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="allowOffering"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-base font-bold text-neutral-900">
                      Are you willing to allow Preacher Jay to take up an offering
                      in each of the services he ministers?{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="offering-yes"
                          checked={field.value === true}
                          onCheckedChange={() => field.onChange(true)}
                        />
                        <label
                          htmlFor="offering-yes"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="offering-no"
                          checked={field.value === false}
                          onCheckedChange={() => field.onChange(false)}
                        />
                        <label
                          htmlFor="offering-no"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="h-auto rounded bg-yellow-500 px-8 py-3 text-base font-bold text-white hover:bg-yellow-600"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </Form>
        </FadeIn>
      </div>
    </section>
  );
}
