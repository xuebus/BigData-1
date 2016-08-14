package com.wbl.aop;

import com.wbl.modal.MultipleDataSource;
import com.wbl.service.OuterDataService;
import org.apache.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

/**
 * Created with Simple_love
 * Date: 2016/5/4.
 * Time: 10:03
 */
@Aspect
@Component
public class MultipleDataSourceAspect {
        private Logger logger = Logger.getLogger(MultipleDataSourceAspect.class);

        @Around(value = "com.wbl.aop.AopPointCut.setDataSource()")
        public Object doAround(ProceedingJoinPoint joinPoint) throws Throwable{
                if (joinPoint.getTarget() instanceof OuterDataService){
                        MultipleDataSource.setDataSourceKey("otherDataSource");
                }else
                        MultipleDataSource.setDataSourceKey("dataSource");
                return joinPoint.proceed();
        }
}
