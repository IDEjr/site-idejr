import styles from './formulario.module.css'
import { sendContactForm } from '@/lib/sendForm'
import { useForm } from 'react-hook-form'
import { isEmail, isMobilePhone } from 'validator'


function formatPhoneNumber( value ) {
  const numericValue = value.replace(/\D/g, '');
  
  let formattedValue = '';
  if (numericValue.length >= 1) {
    formattedValue += `(${numericValue.slice(0, 2)}`;
  }
  if (numericValue.length >= 3) {
    formattedValue += `) ${numericValue.slice(2, 7)}`;
  }
  if (numericValue.length >= 7) {
    formattedValue += `-${numericValue.slice(7, 11)}`;
  }
  
  return formattedValue;
}

function allowToEnterPhoneNumber( event ) {
  const charCode = event.keyCode || event.which;

  // Permite backspace
  if (charCode === 8) {
    return true;
  }

  const currentValue = event.target.value;
  const formattedValue = formatPhoneNumber(currentValue + String.fromCharCode(charCode));

  event.target.value = formattedValue;

  event.preventDefault();
}

export default function Formulario({ form }) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await sendContactForm(data, "contact");
      reset()
    } catch (error) {
      console.error("Error sending contact form:", error);
    }
  };


  return(
    <>
      <div id='contato'></div>
      <div className={styles.mainContainer}>
        <h2 className={styles.title}>
          {form.titulo}
        </h2>
        <div className={styles.form}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.mediumField}>
                <input
                  className={errors?.nome && styles.input_error}
                  id="nome"
                  type="text"
                  placeholder="Nome*"
                  {...register("nome", { required: true })}
                />
                {errors?.nome?.type === "required" && (
                  <p className={styles.error_message}>Campo obrigatório</p>
                )}
              </div>
              <div className={styles.mediumField}>
                <input
                  className={errors?.email && styles.input_error}
                  id="email"
                  type="email"
                  placeholder="E-mail*"
                  {...register("email", {
                    required: true,
                    validate: (value) => isEmail(value),
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p className={styles.error_message}>Campo obrigatório.</p>
                )}
                {errors?.email?.type === "validate" && (
                <p className={styles.error_message}>Email inválido</p>
                )}
              </div>
              <div className={styles.mediumField}>
                <input
                  className={errors?.celular && styles.input_error}
                  id="celular"
                  maxLength="15"
                  type="text"
                  onKeyDown={(event) => allowToEnterPhoneNumber(event)}
                  placeholder="Celular*"
                  {...register("celular", {
                    required: true,
                    validate: (value) => isMobilePhone(value, 'pt-BR'),
                  })}
                />
                {errors?.celular?.type === "required" && (
                  <p className={styles.error_message}>Campo obrigatório</p>
                )}
                {errors?.celular?.type === "validate" && (
                  <p className={styles.error_message}>Número inválido.</p>
                )}
              </div>
              <div className={styles.mediumField}>
                <input
                  className={errors?.assunto && styles.input_error}
                  id="assunto"
                  type="text"
                  placeholder="Assunto*"
                  {...register("assunto", { required: true })}
                />
                {errors?.assunto?.type === "required" && (
                  <p className={styles.error_message}>Campo obrigatório</p>
                )}
              </div>
              <div className={styles.largeField}>
                <textarea
                  className={errors?.mensagem && styles.input_error}
                  id="mensagem"
                  type="text"
                  placeholder="Sua mensagem"
                  {...register("mensagem", { required: true })}
                />
                {errors?.mensagem?.type === "required" && (
                  <p className={styles.error_message}>Campo obrigatório</p>
                )}
              </div>
              <div className={styles.mediumField}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};