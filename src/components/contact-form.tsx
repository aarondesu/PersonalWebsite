import { useForm } from 'react-hook-form';

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form className="flex flex-col space-y-8" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label className="font-medium">Your Name</label>
          <input
            {...register('user_name', { required: 'Name is required' })}
            className="border-2 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="">
            Your Email
          </label>
          <input
            {...register('user_name', { required: 'Email is required' })}
            className="border-2 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            className="resize-y min-w-[320px] h-40 p-2 border-2"
            id="message"
          ></textarea>
        </div>
        <div className="flex">
          <button className="p-2 w-full bg-indigo-500 text-white" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
