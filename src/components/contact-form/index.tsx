import { createSignal, JSX, For, onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';
import Button from '../button';
import style from './form.module.scss';

type FormInput = {
  id: string;
  label: string;
  value: string;
  error: string;
  type: 'text' | 'textarea';
  required?: boolean;
};

const initialState: FormInput[] = [
  {
    id: 'name',
    label: 'Name',
    value: '',
    error: '',
    type: 'text',
    required: true,
  },
  {
    id: 'email',
    label: 'Email Address',
    value: '',
    error: '',
    type: 'text',
    required: true,
  },
  { id: 'phone', label: 'Phone', value: '', error: '', type: 'text' },
  {
    id: 'message',
    label: 'Your Message',
    value: '',
    error: '',
    type: 'textarea',
    required: true,
  },
];

type OnInputChange = (
  event: InputEvent & {
    currentTarget: HTMLInputElement | HTMLTextAreaElement;
    target: Element;
  },
  index: number
) => void;

const ContactForm = () => {
  const [inputs, setInputs] = createStore(initialState);
  const [formIsDisabled, setFormIsDisabled] = createSignal(false);
  const [requestResponse, setRequestResponse] = createSignal('');
  const [requestErr, setRequestErr] = createSignal<string>('');

  let formRef: HTMLFormElement | undefined;
  onCleanup(() => (formRef = undefined));

  const onInputChange: OnInputChange = (e, i) => {
    setInputs(i, () => ({ value: e.currentTarget.value, error: '' }));
  };

  const onFormSubmit: JSX.EventHandlerUnion<
    HTMLFormElement,
    Event & { submitter: HTMLElement }
  > = async (e) => {
    e.preventDefault();

    if (formIsDisabled()) return;
    setFormIsDisabled(true);
    setRequestErr('');
    setRequestResponse('');

    let validationError = false;

    setInputs({}, (el) => {
      const input = el.value.trim().replaceAll(/\s+/g, ' ');

      // validation logic..
      const inputError =
        input.length < 1 && el.required ? "Can't be empty" : null;

      if (inputError) validationError = true;

      return { val: input, error: inputError || '' };
    });

    if (validationError) return setFormIsDisabled(false);

    // api logic..
    try {
      if (window.navigator.onLine) {
        const res = await new Promise<string>((resolve) => {
          setTimeout(() => resolve('Success! Message has been sent.'), 1000);
        });

        if (formRef) {
          setInputs({}, () => ({ value: '' }));
          setRequestResponse(res);
          setTimeout(() => formRef && setRequestResponse(''), 6000);
        }
      } else {
        throw new Error(
          "Couldn't reach server. Check your internet connection."
        );
      }
    } catch (err) {
      if (formRef && err instanceof Error) setRequestErr(err.message);
    }

    formRef && setFormIsDisabled(false);
  };

  return (
    <div class={style.formBox}>
      <div class={style.formBox__copy}>
        <h1 class="h">Contact Us</h1>
        <p class="p">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <form class={style.form} onsubmit={onFormSubmit} ref={formRef}>
        {requestResponse() && (
          <p class={style.form__success}>{requestResponse()}</p>
        )}
        {requestErr() && (
          <p class={style.form__errMsg}>{`Error: ${requestErr()}`}</p>
        )}

        <For each={inputs}>
          {(el, i) => (
            <div class={style.form__input}>
              <label for={el.id}>{el.label}</label>
              {el.type === 'text' ? (
                <input
                  type="text"
                  id={el.id}
                  placeholder={el.label}
                  value={el.value}
                  onInput={(e) => onInputChange(e, i())}
                />
              ) : (
                <textarea
                  id={el.id}
                  placeholder={el.label}
                  value={el.value}
                  onInput={(e) => onInputChange(e, i())}
                ></textarea>
              )}
              {el.error && <span>{el.error}</span>}
            </div>
          )}
        </For>
        <Button type="submit" label="submit" disabled={formIsDisabled()} />
      </form>
    </div>
  );
};

export default ContactForm;
