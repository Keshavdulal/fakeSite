import clsx from 'clsx'

const GridContainer = ({ className = '', props, children }) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-4 px-10 gap-4 md:gap-8',
        'md:grid-cols-12 md:gap-8 md:px-0',
        className
      )}
      {...props}>
      {children}
    </div>
  )
}

export default GridContainer
