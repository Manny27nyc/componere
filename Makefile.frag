componere-test-coverage:
	CCACHE_DISABLE=1 $(MAKE) EXTRA_CFLAGS="-fprofile-arcs -ftest-coverage" TEST_PHP_ARGS=-q clean test

componere-test-coverage-lcov: componere-test-coverage
	lcov -c --directory $(top_srcdir)/src/.libs --output-file $(top_srcdir)/coverage.info

componere-test-coverage-html: componere-test-coverage-lcov
	genhtml $(top_srcdir)/coverage.info --output-directory=$(top_srcdir)/html