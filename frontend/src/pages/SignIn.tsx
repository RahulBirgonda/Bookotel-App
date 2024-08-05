import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="flex justify-center items-center min-h-50% bg-gray-50">
      <form
        onSubmit={onSubmit}
        className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
            <input
              type="email"
              className="border rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
            <input
              type="password"
              className="border rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <span className="text-sm text-center">
            Not Registered?{" "}
            <Link className="text-blue-600 hover:underline" to="/register">
              Create an account here
            </Link>
          </span>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 font-bold rounded hover:bg-blue-500 text-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
