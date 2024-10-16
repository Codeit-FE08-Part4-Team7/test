import { SignInRequestBody, SignInResponse } from "@/dtos/AuthDtos";

const AUTH_BASE_URL = `https://fe-project-cowokers.vercel.app/8-7`;

export async function postRefreshAccessToken(refreshToken: string) {
  const res = await fetch(`${AUTH_BASE_URL}/auth/refresh-token`, {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 0 },
  });
  const json: { accessToken: string } = await res.json();
  return json;
}

export async function postSignIn({ email, password }: SignInRequestBody) {
  const res = await fetch(`${AUTH_BASE_URL}/auth/signin`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 0 },
  });
  const json: SignInResponse = await res.json();
  return json;
}

interface PostSignInGoogleRequest {
  token: string;
}

export async function postSignInGoogle({ token }: PostSignInGoogleRequest) {
  const res = await fetch(`${AUTH_BASE_URL}/auth/signin/GOOGLE`, {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 0 },
  });
  const json: SignInResponse = await res.json();
  return json;
}
