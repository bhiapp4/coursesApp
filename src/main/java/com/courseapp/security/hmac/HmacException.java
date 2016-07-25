package com.courseapp.security.hmac;

public class HmacException extends Exception{

	private static final long serialVersionUID = 1L;

	public HmacException(String message) {
        super(message);
    }

    public HmacException(String message, Throwable throwable) {
        super(message,throwable);
    }
}
