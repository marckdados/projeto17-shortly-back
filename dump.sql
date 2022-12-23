--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "userId" integer NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, '1ac9ae72-962e-40df-b393-4d87567d9c71');
INSERT INTO public.sessions VALUES (2, 2, '6f8d086a-3054-46ca-b423-acee674db9ce');
INSERT INTO public.sessions VALUES (3, 3, '438a1d5a-2160-4828-ac6b-64285b4b408c');
INSERT INTO public.sessions VALUES (4, 1, '9ddc420f-517b-4065-9b16-226e645b3201');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'https://youtube.com', 'PoVCxg1Yz', 2, 7);
INSERT INTO public.urls VALUES (2, 'https://youtube.com', 'nCfdQa5o5', 1, 3);
INSERT INTO public.urls VALUES (3, 'https://google.com', 'twvZrwZp4', 1, 2);
INSERT INTO public.urls VALUES (4, 'https://google.com', 'Qm-dzyEGz', 1, 0);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Bismarck', 'bismarck@email.com', '$2b$10$IctHih7.rn7ystJLqP9U3.hKcj5Rg/KB7pGFUSZTrHQQjg9L9Lca6');
INSERT INTO public.users VALUES (2, 'Joao', 'joao@email.com', '$2b$10$YQ78RjeFQE/UgpiICJtO3e0.TTYXNLZJAJVQgqPK8FoVqtYWluK6a');
INSERT INTO public.users VALUES (3, 'Daniel', 'dan@email.com', '$2b$10$O/T4RTB.pqtby/y7omE5deY6oWNVf6I1hbBsj2ftMQmxyp7IosHAC');
INSERT INTO public.users VALUES (4, 'jubileu', 'jubs@email.com', '$2b$10$RCrzw1WhgYlHaE6Robwr/.91lxolPyOo7Dg.4JcAroF3eGG..XdNm');
INSERT INTO public.users VALUES (5, 'jailton', 'jailton@email.com', '$2b$10$u7OkHnrKmDPw288ylKpD7uuN2cexeBT6pX.C1sV07gs6jlNj/E226');
INSERT INTO public.users VALUES (6, 'maria', 'maria@email.com', '$2b$10$eNIhLEIn1kKqZVtze0kMT.szGUweL1zpmL2Oc5NuunAedq5M72cyu');
INSERT INTO public.users VALUES (7, 'thiago', 'thiago@email.com', '$2b$10$N7Obhq3utGd2PDzRWGIZWu99/afDxecw5oeVF9gBwPwO1UXijXDaS');
INSERT INTO public.users VALUES (8, 'flavia', 'flavia@email.com', '$2b$10$rLEi4jbftJSB3mIAguDR4e1DqwtEOMUCJBvSIsnbmyX3Oo0AdDnKe');
INSERT INTO public.users VALUES (9, 'carlos', 'karlos@email.com', '$2b$10$zR4.rXlhGINEbiMNR1bRSuhYk7VfNWX57ysAAhJfZRoi4cXcOi.iO');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 4, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

