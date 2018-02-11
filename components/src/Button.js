import Link from "next/link";

const Button = ({ children, href, as, color = "black" }) => {
  return (
    <Link as={as} href={href}>
      <a className="button">
        {children}
        <style jsx>{`
          a {
            width: 300px;
            height: 50px;
            background: ${color};
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 16px;
            text-decoration: none;
            text-transform: uppercase;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        `}</style>
      </a>
    </Link>
  );
};

export default Button;
