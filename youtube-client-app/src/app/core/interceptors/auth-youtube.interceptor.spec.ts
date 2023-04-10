import { TestBed } from '@angular/core/testing';

import { AuthYoutubeInterceptor } from './auth-youtube.interceptor';

describe('AuthInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthYoutubeInterceptor],
    }),
  );

  it('should be created', () => {
    const interceptor: AuthYoutubeInterceptor = TestBed.inject(AuthYoutubeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
